import React from 'react';
import {Controller} from "react-hook-form";
import InputField from "../InputField";
import {Control} from "react-hook-form/dist/types/form";

interface IProps {
    control: Control;
    id: string;
    name: string;
    type: string;
};

const InputFieldController: React.FC<IProps> = ({ control, id, name, type, children }) => {
    return (
        <Controller control={control}
                    name={name}
                    render={({ field }) => (
                        <InputField type={type}
                                    id={id}
                                    {...field}
                        >
                            {children}
                        </InputField>
                    )}
        />
    );
};

export default InputFieldController;
