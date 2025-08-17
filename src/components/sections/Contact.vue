<template>
  <section id="contact" class="contact">
    <div class="contact__container">
      <div class="contact__header">
        <h2 class="contact__title">Get In Touch</h2>
        <p class="contact__subtitle">Let's discuss your next project or just say hello</p>
      </div>
      
      <div class="contact__content">
        <div class="contact__info">
          <div class="contact__info-item">
            <div class="contact__info-icon">
              <i class="mdi mdi-map-marker"></i>
            </div>
            <div class="contact__info-content">
              <h3 class="contact__info-title">Location</h3>
              <p class="contact__info-text">Cebu, Philippines</p>
            </div>
          </div>
          
          <div class="contact__info-item">
            <div class="contact__info-icon">
              <i class="mdi mdi-email"></i>
            </div>
            <div class="contact__info-content">
              <h3 class="contact__info-title">Email</h3>
              <p class="contact__info-text">aronghazeljoy@gmail.com</p>
            </div>
          </div>
          
          <div class="contact__info-item">
            <div class="contact__info-icon">
              <i class="mdi mdi-phone"></i>
            </div>
            <div class="contact__info-content">
              <h3 class="contact__info-title">Phone</h3>
              <p class="contact__info-text">+63 912 345 6789</p>
            </div>
          </div>
        </div>
        
        <form class="contact__form" @submit.prevent="handleSubmit">
          <div class="contact__form-group">
            <label for="name" class="contact__form-label">Name</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              class="contact__form-input"
              required
            />
          </div>
          
          <div class="contact__form-group">
            <label for="email" class="contact__form-label">Email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              class="contact__form-input"
              required
            />
          </div>
          
          <div class="contact__form-group">
            <label for="subject" class="contact__form-label">Subject</label>
            <input
              id="subject"
              v-model="form.subject"
              type="text"
              class="contact__form-input"
              required
            />
          </div>
          
          <div class="contact__form-group">
            <label for="message" class="contact__form-label">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              class="contact__form-textarea"
              rows="5"
              required
            ></textarea>
          </div>
          
          <div class="contact__form-actions">
            <Button
              type="submit"
              variant="primary"
              size="large"
              :disabled="isSubmitting"
            >
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </Button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import Button from '../_generics/Button.vue'
import emailjs from '@emailjs/browser'
import { emailjsConfig } from '../../config/emailjs.js'

export default {
  name: 'Contact',
  components: {
    Button
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      isSubmitting: false
    }
  },
  methods: {
    async handleSubmit() {
      this.isSubmitting = true
      
      try {
        // EmailJS configuration
        const templateParams = {
          from_name: this.form.name,
          from_email: this.form.email,
          subject: this.form.subject,
          message: this.form.message,
          to_email: 'aronghazeljoy@gmail.com'
        }

        // Send email using EmailJS
        const result = await emailjs.send(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          templateParams,
          emailjsConfig.publicKey
        )

        console.log('Email sent successfully:', result)
        
        // Reset form
        this.form = {
          name: '',
          email: '',
          subject: '',
          message: ''
        }
        
        // Show success message
        alert('Thank you for your message! I\'ll get back to you soon.')
      } catch (error) {
        console.error('Error sending email:', error)
        
        // Fallback to mailto if EmailJS fails
        try {
          const emailSubject = encodeURIComponent(this.form.subject)
          const emailBody = encodeURIComponent(
            `Name: ${this.form.name}\n` +
            `Email: ${this.form.email}\n\n` +
            `Message:\n${this.form.message}`
          )
          
          const mailtoLink = `mailto:aronghazeljoy@gmail.com?subject=${emailSubject}&body=${emailBody}`
          window.open(mailtoLink, '_blank')
          
          alert('Email service unavailable. Your default email client should open as a fallback.')
        } catch (fallbackError) {
          console.error('Fallback error:', fallbackError)
          alert('Sorry, there was an error. Please email me directly at aronghazeljoy@gmail.com')
        }
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
@import '../../assets/styles/mixins.scss';

.contact {
  @include section-padding;
  
  &__container {
    @include container;
  }
  
  &__header {
    text-align: center;
    margin-bottom: $spacing-3xl;
    @include slide-up;
  }
  
  &__title {
    @include heading-style($font-size-5xl, $font-weight-normal);
    margin-bottom: $spacing-md;
    color: $primary-color;
  }
  
  &__subtitle {
    @include body-text($font-size-xl, $font-weight-normal);
    @include text-variant('secondary');
    max-width: 600px;
    margin: 0 auto;
  }
  
  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $spacing-3xl;
    align-items: start;
    
    @media (max-width: $breakpoint-lg) {
      grid-template-columns: 1fr;
      gap: $spacing-2xl;
    }
  }
  
  &__info {
    @include fade-in(0.8s);
    animation-delay: 0.2s;
    animation-fill-mode: both;
  }
  
  &__info-item {
    display: flex;
    align-items: flex-start;
    gap: $spacing-md;
    margin-bottom: $spacing-xl;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  &__info-icon {
    @include flex-center;
    width: 50px;
    height: 50px;
    background-color: $primary-background;
    border-radius: $border-radius-full;
    color: $primary-color;
    flex-shrink: 0;
    
    i {
      font-size: 24px;
    }
  }
  
  &__info-content {
    flex: 1;
  }
  
  &__info-title {
    @include heading-style($font-size-lg, $font-weight-medium);
    margin-bottom: $spacing-xs;
    color: $text-primary;
  }
  
  &__info-text {
    @include body-text($font-size-base, $font-weight-normal);
    @include text-variant('secondary');
    margin: 0;
  }
  
  &__form {
    @include fade-in(0.8s);
    animation-delay: 0.4s;
    animation-fill-mode: both;
  }
  
  &__form-group {
    margin-bottom: $spacing-lg;
  }
  
  &__form-label {
    @include body-text($font-size-base, $font-weight-medium);
    display: block;
    margin-bottom: $spacing-xs;
    color: $text-primary;
  }
  
  &__form-input,
  &__form-textarea {
    @include body-text($font-size-base, $font-weight-normal);
    width: 100%;
    padding: $spacing-sm $spacing-md;
    border: 2px solid $gray-medium;
    border-radius: $border-radius-md;
    background-color: $white;
    transition: all $transition-normal;
    
    &:focus {
      outline: none;
      border-color: $primary-color;
      box-shadow: 0 0 0 3px rgba(252, 68, 135, 0.1);
    }
    
    &::placeholder {
      color: $text-disabled;
    }
  }
  
  &__form-textarea {
    resize: vertical;
    min-height: 120px;
  }
  
  &__form-actions {
    margin-top: $spacing-xl;
  }
}
</style> 