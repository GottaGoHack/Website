<script context="module">
    export const load = async ({ page, fetch }) => {
        const id = page.params.id;
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const post = await res.json();
        return {
            props: {
                post,
            },
        };
    };
</script>

<script>
    export let post;
    import { title } from '/app';

    import Hackathon from '/assets/hackathon.webp';

</script>

<svelte:head>
    <title>{title('Post')}</title>
</svelte:head>

<div id="header">
    <div class="left">
       <img src={Hackathon} alt="Hackathon" width="800" height="500" margin="40"/>
    </div>
    <div class="left">
        <div class="inner">
            <h1>{post.title}</h1>
            <hr />

        </div>
    </div>

</div>
<div id="content">
    <div class="since">{post.date}</div>

    <div class="description">
        <p>
            {post.body}
        </p>
    </div>
</div>

<style lang="scss">
  @use 'sass:math';

  @import 'mixins';
  @import 'vars';

  #header {

    .left, .right {
      flex: 0.5;

      justify-content: center;
      align-items: center;
    }

    .left {
      flex-direction: column;
      position: relative;
      margin-left: 25px;
      margin-top: 25px;
      margin-bottom: 25px;

      .inner {
        flex-direction: column;
        position: relative;
      }

      .separator {
        margin-bottom: 75px;
      }

      :global(.shadows) {
        margin-left: 0;
      }
    }

    .right {
      padding-top: 50px;
      padding-right: 25px;
      flex-direction: column;

      :global(.shadows) {
        margin-left: 0;
      }

      :global(.shadows-content) {
        flex-direction: column;
        padding: 20px 25px;
        font-size: 22px;
        background-color: $color-blue;
      }

      .title {
        font-weight: bold;
        font-style: italic;
      }

      .content {
        flex-direction: column;


        p {
          margin: 20px 0 0;

          .bold {
            font-weight: bold;
          }
        }
      }
    }
  }

  #content {
    justify-content: center;
    text-align: center;
    padding: 35px;
    background-color: white;

    .since {
      font-size: 32px;
    }

    .description {
      margin-top: 20px;
      font-size: 22px;
      color : black;
      p {
        margin: 0;
      }
    }
  }
</style>
