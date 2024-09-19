<script>
  let count = 0
  const handelClick = () => {
    count++
  }
</script>

<h1>Hello {count}</h1>
<button on:click={handelClick}>increment</button>


<style>

</style>