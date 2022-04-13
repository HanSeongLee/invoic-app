import React from 'react';
import ItemField from "../../components/ItemField";
import {Control} from "react-hook-form/dist/types/form";

interface IProps {
    control: Control;
    items: Item[];
};

const ItemListContainer: React.FC<IProps> = ({ control, items }) => {
    return (
        <ul>
            {items?.map((props, index) => (
                <ItemField control={control}
                           key={index}
                           index={index}
                           {...props}
                />
            ))}
        </ul>
    );
};

export default ItemListContainer;
