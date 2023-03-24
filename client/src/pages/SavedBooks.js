import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';

import {
  Container,
  Card,
  Button,
  Row,
  Col
} from 'react-bootstrap';

import { GET_USER } from '../utils/queries';
import { SAVE_BOOK, REMOVE_BOOK } from '../utils/mutations';
import Auth from '../utils/auth';
import { removeBookId } from '../utils/localStorage';

const SavedBooks = () => {
  const [userData, setUserData] = useState({});
  // const [saveBook] = useMutation(SAVE_BOOK);
  const [removeBook] = useMutation(REMOVE_BOOK);
  const { loading, data } = useQuery(GET_USER, {
    variables: { username: Auth.getProfile().data.username },
  });

  useEffect(() => {
    if (data) {
      setUserData(data.user);
    }
  }, [data]);


  const handleDeleteBook = async (bookId) => {
    try {
      const token = Auth.loggedIn() ? Auth.getToken() : null;

      if (!token) {
        return false;
      }
      console.log(`deleting bookId ${bookId}`);
      const { data } = await removeBook({
        variables: { bookId : bookId },
      });

      setUserData(data.removeBook);
      removeBookId(bookId);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <div fluid className='text-light bg-dark p-5'>
        <Container>
          <h1>Viewing saved books!</h1>
        </Container>
      </div>
      <Container>
        <h2 className='pt-5'>
          {(userData.savedBooks && userData.savedBooks.length)
            ? `Viewing ${userData.savedBooks.length} saved ${userData.savedBooks.length === 1 ? 'book' : 'books'}:`
            : 'You have no saved books!'}
        </h2>
        <Row>
          {
            (userData.savedBooks) ? 
              userData.savedBooks.map((book) => {
                return (
                  <Col md="4">
                    <Card key={book._id} border='dark'>
                      {book.image ? <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' /> : null}
                      <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                        <p className='small'>Authors: {book.authors.join(', ')}</p>
                        <Card.Text>{book.description}</Card.Text>
                        <Button className='btn-block btn-danger' onClick={() => handleDeleteBook(book.bookId)}>
                          Delete this Book!
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              }) 
              : null
          }
        </Row>
      </Container>
    </>
  );
};

export default SavedBooks;
