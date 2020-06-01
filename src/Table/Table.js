import React from 'react';
 
 
export default props => (
    <table className="table table-position">
        <thead>
            <tr>
                <th onClick={props.onSort.bind(null, 'status')}>
                    Status {props.sortField === 'status' ? <small>{props.sort}</small> : null}
                    </th>
                <th onClick={props.onSort.bind(null, 'order_id')}>
                    Order ID {props.sortField === 'order_id' ? <small>{props.sort}</small> : null}
                    </th>
                <th onClick={props.onSort.bind(null, 'store_id')}>
                    Store ID {props.sortField === 'store_id' ? <small>{props.sort}</small> : null}
                    </th>
                <th onClick={props.onSort.bind(null, 'date_created')}>
                    Date Created {props.sortField === 'date_created' ? <small>{props.sort}</small> : null}
                    </th>
            </tr>
        </thead>
        <tbody>
            {props.data.map(item =>(
                <tr key={item.order_id} onClick={props.onRowSelect.bind(null, item)}>
                    <td>{item.status}</td>
                    <td>{item.order_id}</td>
                    <td>{item.store_id}</td>
                    <td>{item.date_created}</td>
                </tr>
            ))}
        </tbody>
    </table>
)