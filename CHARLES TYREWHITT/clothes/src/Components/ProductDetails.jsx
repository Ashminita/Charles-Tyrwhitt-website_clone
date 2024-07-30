

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure
} from "@chakra-ui/react";
import './ProductDetalils.css'; 
import Navbar from '../navbar/Navbar';
import Rooter from '../navbar/Rooter';
import HomePage from '../Pages/Homepage'; 

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isDuplicateOpen, onOpen: onDuplicateOpen, onClose: onDuplicateClose } = useDisclosure();

  useEffect(() => {
    fetch(`http://localhost:3000/product/${id}`) 
      .then(response => response.json())
      .then(data => {
        setProduct(data);
      })
      .catch(error => console.error('Error fetching product data:', error));
  }, [id]);

  const addToCart = async () => {
    if (!selectedSize) {
      onOpen();
      return;
    }

    const existingCartResponse = await fetch('http://localhost:3000/cart');
    const existingCart = await existingCartResponse.json();
    const isItemInCart = existingCart.some(item => item.id === product.id && item.size === selectedSize);

    if (isItemInCart) {
      onDuplicateOpen();
      return;
    }

    const cartItem = {
      ...product,
      size: selectedSize,
      quantity: 1
    };

    await fetch('http://localhost:3000/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cartItem)
    });

    navigate('/cart');
  };

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <HomePage />
      <div className="product-details">
        <div className="image-section">
          <img src={product.img} alt={product.title} />
        </div>
        <div className="details-section">
          <h1>{product.title}</h1>
          <p className="description">{product.description}</p>
          <p className="price">${product.price}</p>

          <div className="size-options">
            <h2 style={{ fontWeight: 'bold' }}>SIZE</h2>
            <div className="size-buttons">
              {['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'].map((size, index) => (
                <button
                  key={index}
                  className={selectedSize === size ? "selected" : ""}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button className="add-to-cart-button" onClick={addToCart}>Add to Bag</button>
        </div>
      </div>
      <Rooter />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Size Selection Required</ModalHeader>
          <ModalBody>Please select a size before adding the product to the cart.</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              OK
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={isDuplicateOpen} onClose={onDuplicateClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Item Already in Cart</ModalHeader>
          <ModalBody>This product with the selected size is already in your cart.</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onDuplicateClose}>
              OK
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ProductDetails;
