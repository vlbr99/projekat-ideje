<script>
  import "../routes/index.scss";
  import { TicketPlus } from "lucide-svelte";
  import { CircleX } from "lucide-svelte";
  import { enhance } from "$app/forms";
  let { form, data } = $props();
  let open_dialog = () => {
    const dialog = document.querySelector(".alert_dialog_component");
    dialog.showModal();
    dialog.style.animation = "fadeInScale 0.3s ease forwards";
  };

  const close_dialog = () => {
    const dialog = document.querySelector(".alert_dialog_component");
    dialog.close();
  };
</script>

<dialog class="alert_dialog_component">
  <form
    class="alert_dialog_content"
    method="POST"
    action="?/post_idea"
    use:enhance
  >
    <h3>Objavi ideju</h3>
    <CircleX onclick={close_dialog} size={32} class="close" />
    <input name="title" type="text" placeholder="Naslov" />
    <textarea name="description" placeholder="Opis"></textarea>
    <input name="url" type="text" placeholder="Primjer (link)" />
    <label for="pl">Jezik</label>
    <select name="pl" class="programming_languages">
      <option value="Neodređeno">Neodređeno</option>
      <option value="ada">Ada</option>
      <option value="apl">APL</option>
      <option value="assembly">Assembly</option>
      <option value="bash">Bash</option>
      <option value="c">C</option>
      <option value="clojure">Clojure</option>
      <option value="csharp">C#</option>
      <option value="cplusplus">C++</option>
      <option value="cobol">COBOL</option>
      <option value="crystal">Crystal</option>
      <option value="dart">Dart</option>
      <option value="delphi">Delphi/Object Pascal</option>
      <option value="elixir">Elixir</option>
      <option value="erlang">Erlang</option>
      <option value="fsharp">F#</option>
      <option value="fortran">Fortran</option>
      <option value="go">Go</option>
      <option value="groovy">Groovy</option>
      <option value="haskell">Haskell</option>
      <option value="java">Java</option>
      <option value="javascript">JavaScript</option>
      <option value="julia">Julia</option>
      <option value="kotlin">Kotlin</option>
      <option value="labview">LabVIEW</option>
      <option value="lisp">Lisp</option>
      <option value="lua">Lua</option>
      <option value="matlab">MATLAB</option>
      <option value="ml">ML</option>
      <option value="objectivec">Objective-C</option>
      <option value="pascal">Pascal</option>
      <option value="perl">Perl</option>
      <option value="php">PHP</option>
      <option value="prolog">Prolog</option>
      <option value="python">Python</option>
      <option value="r">R</option>
      <option value="ruby">Ruby</option>
      <option value="rust">Rust</option>
      <option value="scala">Scala</option>
      <option value="scheme">Scheme</option>
      <option value="smalltalk">Smalltalk</option>
      <option value="solidity">Solidity</option>
      <option value="swift">Swift</option>
      <option value="typescript">TypeScript</option>
      <option value="visualbasic">Visual Basic .NET</option>
    </select>
    <label for="diff" class="diff">Težina</label>
    <select class="post_idea_buttons" name="diff">
      <option>Lako</option>
      <option>Srednje</option>
      <option>Teško</option>
    </select>
    <button class="post_idea">
      <TicketPlus />
      Objavi ideju</button
    >
    {#if form?.message}
      <p style="color: white;">{form.message}</p>
    {/if}
  </form>
</dialog>

<div class="sort_posts">
  <button onclick={open_dialog}>
    <TicketPlus />
    Objavi ideju</button
  >
</div>

<h1 class="heading">Ideje:</h1>

<div class="posts">
  {#each data.post as idea}
    <div>
      <h3>{idea.title}</h3>
      <main class="span_wrapper">
        <span>{idea.language}</span>
        <span>{idea.difficulty}</span>
      </main>
      <p>{idea.description}</p>
      <a href={idea.url} target="_blank">{idea.url}</a>
    </div>
  {/each}
</div>
