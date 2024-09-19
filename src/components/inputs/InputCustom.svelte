<script>
  export let value = '';
  export let type = 'text';
  export let label = '';
  export let placeholder = '';
  export let required = false;
  export let customValidation = null; // Кастомная функция валидации
  export let onChange = () => {};

  let error = '';

  function handleInput(event) {
    const val = event.target.value;
    error = '';

    // Применяем кастомную валидацию, если она задана
    if (customValidation) {
      error = customValidation(val);
    }

    onChange(val, error);
  }
</script>

<label>
  {label} {#if required}*{/if}
  <input 
    type={type} 
    value={value} 
    on:input={handleInput} 
    placeholder={placeholder}
    class:error={error}
  />
</label>

{#if error}
  <p style="color: red;">{error}</p>
{/if}

<style>
  label{
    color: #797EA3;;
    font-weight: 300;
    line-height: 120%; 
    display: flex;
    flex-direction: column;
    gap: 5px;
  } 
  label:focus{
    color: #FFF;
  }
  input.error {
    border-color: red;
  }
  input{
    color: #FFF;
    display: flex;
    background-color: transparent;
    width: 300px;
    padding-bottom: 6px;
    border: none;
    border-bottom: 1px solid #3F4363;
    transition: border-color 0.3s ease; /* Плавный переход для цвета границы */
  }
  input:focus{
    outline: none;
    border-bottom: 1px solid #FFF;
  }
  input:hover{
    border-bottom: 1px solid #8F94B8;
  }
</style>
