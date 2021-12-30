//type of action

const types ={
    SUBMIT_FORM:"SUBMIT_FORM"
}

//actions

const submitForm = (values) => ({
    types : types.SUBMIT_FORM,
    payload : values
})


export default {
    submitForm,
    types
}
