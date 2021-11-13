import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup.string().trim().min(2, 'must be 2 characters minimum'),
    size: yup.string().trim(),
    more: yup.string().trim(),
    ham: yup.boolean(),
    pepperoni: yup.boolean(),
    bacon: yup.boolean(),
    chicken: yup.boolean(),
    pineapple: yup.boolean(),
    sausage: yup.boolean(),
    peppers: yup.boolean()
})

export default formSchema