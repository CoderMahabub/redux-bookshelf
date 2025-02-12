import React from 'react';
import Book from '../components/Book/Book';
import { useSelector } from 'react-redux';
import PageLayout from '../components/PageLayout/PageLayout';
const Discover = () => {
    const books = useSelector((state) => state.books.discover)
    return (
        <PageLayout>
            {
                books.map((book) => (<Book key={book.id} book={book} />))
            }
        </PageLayout>
    );
};

export default Discover;