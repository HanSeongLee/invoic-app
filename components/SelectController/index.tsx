import React from 'react';
import {Control} from "react-hook-form/dist/types/form";
import {Controller} from "react-hook-form";
import Select from "../Select";

interface IProps {
    control: Control;
    id: string;
    name: string;
    defaultValue: any;
    options: {label: string, value: any}[];
};

const SelectController: React.FC<IProps> = ({
                                                control, id, name, options,
                                                defaultValue, children
                                            }) => {
    return (
        <Controller control={control}
                    name={name}
                    defaultValue={defaultValue}
                    render={({field}) => (
                        <Select id={id}
                                options={options}
                                {...field}
                        >
                            {children}
                        </Select>
                    )}
        />
    );
};

export default SelectController;
