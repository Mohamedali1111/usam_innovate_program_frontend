import { useState, useCallback } from 'react'

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setValues(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }, [errors])

  const handleSubmit = useCallback((onSubmit) => {
    return async (e) => {
      e.preventDefault()
      setIsSubmitting(true)
      
      try {
        await onSubmit(values)
        setValues(initialState)
        setErrors({})
      } catch (error) {
        console.error('Form submission error:', error)
      } finally {
        setIsSubmitting(false)
      }
    }
  }, [values, initialState])

  const resetForm = useCallback(() => {
    setValues(initialState)
    setErrors({})
    setIsSubmitting(false)
  }, [initialState])

  const setFieldError = useCallback((field, error) => {
    setErrors(prev => ({
      ...prev,
      [field]: error
    }))
  }, [])

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm,
    setFieldError,
    setValues
  }
}
