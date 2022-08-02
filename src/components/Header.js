import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Container,
  FormControl,
  Dropdown,
  Badge,
  Nav,
  Button,
} from 'react-bootstrap';
import { CartState } from '../context/Context';

const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
        <Container>
          <Navbar.Brand>
            <Link to="/">Shopping Cart</Link>
          </Navbar.Brand>
          <Navbar.Text className="search">
            <FormControl
              style={{ width: 500 }}
              placeholder="Search a Product"
              className="m-auto"
              onChange={(e) => {
                productDispatch({
                  type: 'FILTER_BY_SEARCH',
                  payload: e.target.value,
                });
              }}
            />
          </Navbar.Text>
          <Nav>
            <Dropdown>
              <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize="25px" />
                {/* <BsCart4 color="white" fontSize="25px" /> */}
                {/* <FiShoppingcart color="white" fontSize="25px" /> */}
                <Badge className="mx-1">{cart.length}</Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: '370' }}>
                {cart.length > 0 ? (
                  <>
                    {cart.map((product) => (
                      <span className="cart-item" key={product.id}>
                        <img
                          src={product.image}
                          className="cart-item-img"
                          alt={product.name}
                        />
                        <div className="cart-item-detail">
                          <span>{product.name}</span>
                          {/* <span>$ {product.price.split('.')[0]}</span> */}
                          <span>$ {product.price}</span>
                        </div>
                        <AiFillDelete
                          fontSize="20px"
                          style={{ cursor: 'pointer' }}
                          onClick={() =>
                            dispatch({
                              type: 'REMOVE_FROM_CART',
                              payload: product,
                            })
                          }
                        />
                      </span>
                    ))}
                    <Link to="/cart">
                      <Button style={{ width: '95%', margin: '0 10px' }}>
                        Go To Cart
                      </Button>
                    </Link>
                  </>
                ) : (
                  <span style={{ padding: 10 }}>Cart is empty!</span>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
