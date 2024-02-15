const formulario = document.querySelector('#form')
const modal = document.querySelector('#modal')
const closeButton = document.querySelector('#btn_close-modal')

function openModal() {
  modal.open = true
}

function closeModal() {
  modal.open = false
}

function sendEmail(e) {
  e?.preventDefault()
const{name, email, subject, message} = e.target
  const params = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value
  }

  if (params.name && params.email && params.subject && params.message) {
    emailjs.send( 'default_service','template_6z17o9i', params).then(openModal())
  }
}
closeButton.addEventListener('click', closeModal)
formulario.addEventListener('submit', sendEmail)

export default sendEmail