<!-- Modal.svelte -->
<script>
  export let isOpen = false;
  export let onClose;

  let timer;

  function close() {
    clearTimeout(timer);
    if (onClose) onClose();
  }

  if (isOpen) {
    timer = setTimeout(() => {
      close();
    }, 3000); 
  }
</script>

{#if isOpen}
  <div class="modal-overlay" on:click={close}>
    <div class="modal-content" on:click|stopPropagation>
      <span class="close" on:click={close}>×</span>
      <h3>Success!</h3>
      <p>Your form has been submitted successfully.</p>
    </div>
  </div>
{/if}

<style>
  .modal-overlay {
    color: #333;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-content {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    position: relative;
  }
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 24px;
    color: #333;
  }
</style>
