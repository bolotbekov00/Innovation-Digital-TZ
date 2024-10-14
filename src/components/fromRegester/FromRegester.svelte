<script>
  import InputCustom from '../ui/inputs/InputCustom.svelte';
  import { validateGmail, validateRequired, validatePhone } from '../helpers/helpers';
  import Chekbox from '../ui/chekbox/Chekbox.svelte';
  import Modal from '../ui/modalWindow/modalWindow.svelte'; 

  let nameValue = '';
  let emailValue = '';
  let phoneValue = '+996';
  let subjectValue = '';
  let messageValue = '';
  let nameError = '';
  let emailError = '';
  let phoneError = '';
  let subjectError = '';
  let messageError = '';
  let checkboxChecked = false;
  let checkboxError = '';
  let isModalOpen = false;

  function handleNameChange(value, error) {
    nameValue = value;
    nameError = error;
  }

  function handleEmailChange(value, error) {
    emailValue = value;
    emailError = error;
  }

  function handlePhoneChange(value, error) {
    phoneValue = value;
    phoneError = error;
  }

  function handleSubjectChange(value, error) {
    subjectValue = value;
    subjectError = error;
  }

  function handleMessageChange(value, error) {
    messageValue = value;
    messageError = error;
  }

  function validateForm() {
    let valid = true;
    if (!nameValue) {
      nameError = validateRequired(nameValue);
      valid = false;
    } else {
      nameError = '';
    }

    if (!emailValue) {
      emailError = validateRequired(emailValue);
      valid = false;
    } else {
      emailError = validateGmail(emailValue);
      if (emailError) valid = false;
    }

    if (!phoneValue) {
      phoneError = '';
    } else {
      phoneError = validatePhone(phoneValue);
      if (phoneError) valid = false;
    }

    if (!messageValue) {
      messageError = validateRequired(messageValue);
      valid = false;
    } else {
      messageError = '';
    }

    if (!checkboxChecked) {
      checkboxError = 'You must accept the terms and privacy policy.';
      valid = false;
    } else {
      checkboxError = '';
    }

    return valid;
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    if (validateForm()) {
      console.log("Form submitted:", {
        nameValue,
        emailValue,
        phoneValue,
        subjectValue,
        messageValue,
        checkboxChecked,
      });
      nameValue = '';
      emailValue = '';
      phoneValue = '';
      subjectValue = '';
      messageValue = '';
      nameError = '';
      emailError = '';
      phoneError = '';
      subjectError = '';
      messageError = '';
      checkboxChecked = false;
      checkboxError = '';
      isModalOpen = true;
    }
  }
</script>

<div class="fromBlock">
  <div class="titleBlock">
    <h3>For business enquiries please use the form below</h3>
    <span>*Required</span>
  </div>
  <div>
    <form on:submit={handleSubmit}>
      <InputCustom
        value={nameValue}
        label="Name"
        required={true}
        customValidation={validateRequired}
        onChange={handleNameChange}
      />
      {#if nameError} <p style="color: red;">{nameError}</p> {/if}

      <InputCustom
        value={emailValue}
        label="Email"
        type="email"
        required={true}
        customValidation={validateGmail}
        onChange={handleEmailChange}
      />
      {#if emailError} <p style="color: red;">{emailError}</p> {/if}

      <InputCustom
        value={phoneValue}
        label="Phone"
        placeholder="Optional"
        customValidation={validatePhone}
        onChange={handlePhoneChange}
      />
      {#if phoneError} <p style="color: red;">{phoneError}</p> {/if}

      <InputCustom
        value={subjectValue}
        label="Subject"
        placeholder="Optional"
        onChange={handleSubjectChange}
      />
      {#if subjectError} <p style="color: red;">{subjectError}</p> {/if}
      
      <InputCustom
        value={messageValue}
        label="Message"
        required={true}
        customValidation={validateRequired}
        onChange={handleMessageChange}
      />
      {#if messageError} <p style="color: red;">{messageError}</p> {/if}

      <div class="chekBox">
        <Chekbox checked={checkboxChecked} onChange={() => checkboxChecked = !checkboxChecked}/>
        <p>I accept <a href="@">Terms and Privacy Policy</a></p>
        {#if checkboxError} <p style="color: red;">{checkboxError}</p> {/if}
      </div>
      
      <button type="submit">Send</button>
    </form>
  </div>
  
  <Modal isOpen={isModalOpen} onClose={() => isModalOpen = false} />
</div>



<style>
  .fromBlock{
    display: flex;
    width: 390px;
    padding: 40px 45px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 27px;
    background: #171929;
    box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.70);
  }
  .titleBlock{
    text-align: center;
    display: flex;
    width: 238px;
    flex-direction: column;
    align-items: center;
    gap: 11px;
  }
  span{
    color: #797EA3;
  }
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 38px;
  }
  .chekBox{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }
  span{
    color: #797EA3;
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: 120%;
  }
  a{
    color: #B9BEE5;
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: 120%;
  }
  button{
    color: #fff;
    border: none;
    cursor: pointer;
    display: flex;
    padding: 10px 40px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 50px;
    background: #2C2F47;
  }
  button:hover{
    background: #404463;
  }
</style>
