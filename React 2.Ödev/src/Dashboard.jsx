import React from 'react';
import { Table } from "reactstrap";

export default function Dashboard(props) {
  return (
    <div>
      {/* Üyeler tablosu kaldırıldı */}
      <h2>Ürünler</h2>
      <Table>
        <thead>
          <tr>
            <th>Ürün Adı</th>
            <th>Fiyat</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
