import { it, expect, describe, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Product } from './Product'

describe('Product Component', () => {

 it('displays the product details correctly', () => {
  const product = {
   id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
   image: "images/products/women-summer-jean-shorts.jpg",
   name: "Women's Summer Jean Shorts",
   rating: {
    stars: 4,
    count: 160
   },
   priceCents: 1699,
   keywords: ["shorts", "apparel", "mens"]
  };

  const loadCart = vi.fn();

  render(<Product product={product} loadCart={loadCart} />);

  expect(screen.getByText("Women's Summer Jean Shorts")).toBeInTheDocument();

  expect(screen.getByText("$16.99")).toBeInTheDocument();

  expect(screen.getByTestId('product-image')).toHaveAttribute("src", "images/products/women-summer-jean-shorts.jpg");

  expect(screen.getByTestId('product-rating-stars-image')).toHaveAttribute('src', 'images/ratings/rating-40.png');

  expect(screen.getByText('160')).toBeInTheDocument();

 });

});