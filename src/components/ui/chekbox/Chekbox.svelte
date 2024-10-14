<!-- Chekbox.svelte -->
<script>
  import icon from "../../../assets/img/Checkmark.svg"
  export let checked = false;
  export let onChange;
  
  function handleClick() {
    if (onChange) {
      onChange();
    }
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="chekbox" on:click={handleClick} role="button" tabindex="0">
  {#if checked} <img src="{icon}" alt="Checkmark icon"> {/if}
</div>

<style>
  .chekbox {
    cursor: pointer;
    border-radius: 8px;
    border: 1.7px solid #3F4363;
    height: 20px;
    width: 20px;
    display: flex;
    padding: 5px;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .chekbox:hover {
    border-radius: 8px;
    border: 1.7px solid rgba(143, 148, 184, 0.80);
  }
  img {
    width: 20px;
    height: 20px;
  }
</style>
