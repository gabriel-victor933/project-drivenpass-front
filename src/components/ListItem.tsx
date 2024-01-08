import React from 'react'

type ListItemProps = {
    title: string;
    value: string;
    id: number
}

const ListItem: React.FC<ListItemProps> = ({title,value,id}) => {

    return (
        <li key={id}>
            <h1>{title}</h1>
            <h2>{value}</h2>
        </li>
    )
}

export default ListItem