import React, {InputHTMLAttributes} from 'react';
import {Controller} from "react-hook-form";
import InputField from "../InputField";
import {Control} from "react-hook-form/dist/types/form";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    control: Control;
    id?: string;
    name: string;
    type: string;
};

const InputFieldController: React.FC<IProps> = ({
                                                    control, id, name, type, children,
                                                    ...props
                                                }) => {
    return (
        <Controller control={control}
                    name={name}
                    render={({field}) => (
                        <InputField type={type}
                                    id={id}
                                    {...props}
                                    {...field}
                        >
                            {children}
                        </InputField>
                    )}
        />
    );
};

export default InputFieldController;
