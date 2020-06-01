import React from 'react';
 
export default ({order}) => (
    <div  className="info table-bordered">
    <p>Выбран заказ <b>{order.order_id + ' '}</b></p>
    <p>
    Товары в заказе: <br />
        <table className="table table-bordered">
            <thead>
            <tr>
                <th>ID товара</th>
                <th>Gid</th>
                <th>Цена</th>
                <th>Статус</th>
            </tr>
            </thead>
            <tbody>
            { order.goods.map(item =>
                <tr key={item.gid}>
                    <td><a href="https://www.wildberries.ru/">{item.chrt_id}</a></td>
                    <td>{item.gid}</td>
                    <td>{item.price}</td>
                    <td>{item.status}</td>
                </tr>
            )}
            </tbody>
        </table>
    </p>
 
    <p>ID магазина: <b>{order.store_id}</b></p>
    <p>Статус обработки: <b>{order.status}</b></p>
    <p>Дата создания заказа: <b>{order.date_created}</b></p>
 
    </div>
 
)