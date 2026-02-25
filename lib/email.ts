import emailjs from '@emailjs/browser'

export const sendEmail = async (formData: {
  name: string
  email: string
  subject: string
  message: string
}) => {
  try {
    // Use environment variables or fallback to hardcoded values
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_bq9uz26'
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_5g6pcoo'
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'GDx5TJwJersgPgWeI'

    console.log('Sending email with config:', { serviceId, templateId, publicKey: publicKey.substring(0, 8) + '...' })

    const response = await emailjs.send(
      serviceId,
      templateId,
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'vickamau20@gmail.com'
      },
      publicKey
    )

    console.log('Email sent successfully:', response)
    return { success: true, response }
  } catch (error) {
    console.error('Email sending failed:', error)
    return { success: false, error }
  }
}
