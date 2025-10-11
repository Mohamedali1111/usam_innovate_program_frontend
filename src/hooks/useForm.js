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

  const validateForm = useCallback(() => {
    const newErrors = {}
    
    // Name validation
    if (!values.name || values.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long'
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!values.email || !emailRegex.test(values.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    // Message validation
    if (!values.message || values.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [values])

  const handleSubmit = useCallback((onSubmit) => {
    return async (e) => {
      e.preventDefault()
      
      if (!validateForm()) {
        return
      }
      
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
  }, [values, initialState, validateForm])

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
