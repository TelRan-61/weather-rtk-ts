import type {FormEvent} from "react";
import {useAppDispatch} from "../app/hooks.ts";
import {setCity} from "../features/city/citySlice.ts";

const Form = () => {
    const dispatch = useAppDispatch();

    const getCity = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const city = e.currentTarget.city.value.trim();
        dispatch(setCity(city));
    }

    return (
        <form onSubmit={getCity}>
            <input name={'city'} type="text" placeholder="City name"/>
            <button type={'submit'}>Get Weather</button>
        </form>
    );
};

export default Form;