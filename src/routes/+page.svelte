<script>
  import { enhance, applyAction } from "$app/forms";
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
<form
  method="POST"
  action="?/validate"
  use:enhance={({ form, data, cancel }) => {
    return async ({ result }) => {
      await applyAction(result);
    };
  }}
>
  <input name="test" value="" type="text" />
  <input name="Género" hidden value="Random Value" />
  <button type="submit">Submit</button>
</form>
