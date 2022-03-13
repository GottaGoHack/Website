<script context="module">

  import { title } from '/app';

    const allPosts = import.meta.glob("/src/routes/actu/content/*.md");

    let body=[];
    for (let path in allPosts)
    {
        body.push(
            allPosts[path]().then(({metadata}) => {
                return {path, metadata};
            })
        );
    }

    export const load = async() => {
        const posts = await Promise.all(body);
        return {
            props: {
                posts,
            },
        };
    };
</script>

<script>
    export let posts;

    import Hackathon from '/assets/hackathon.webp';
</script>

<svelte:head>
    <title>{title('Actu')}</title>
</svelte:head>

<div id="header">
    <div class="left">
        <div class="inner">
            <h1>Toute L'Actu</h1> 
            <h1>Gotta Go Hack</h1>
            <hr />
        </div>
    </div>
</div>

<div id="blog">
    <div class="postGrid">
        {#each posts.reverse() as post}
                <div class="post">
                    <a sveltekit:prefetch href={`actu/content/post${post.metadata.id}`}><img src={post.metadata.image} alt={post.metadata.title} width="400vw" height="250vh"/></a>
                    <div class="title"><a sveltekit:prefetch href={`actu/content/post${post.metadata.id}`}>{post.metadata.title.substring(0,30)}</a></div>
                    <div class="description">{post.metadata.description.substring(0,200)}...</div>
                    <div class="link"><a sveltekit:prefetch href={`actu/content/post${post.metadata.id}`}>Read More</a></div>
                </div>
        {/each}
    </div>
</div>

<style lang="scss">
  @use 'sass:math';

  @import 'mixins';
  @import 'vars';

  #header {
    position: relative;

    .left {
      flex: 0.5;

      justify-content: center;
      align-items: center;
      flex-direction: column;

      margin-left: 8vw;
      margin-top: 10vh;
      margin-bottom: 5vh;

      .inner {
        flex-direction: column;

      }
    }
  }

    #blog {

      flex-direction: column;
      padding-left: 2.5vw;
      padding-right: 2.5vw;
      padding-top: 7vh;
      padding-bottom: 7vh;
      background-color: white;

      .postGrid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
        grid-gap: 2vw;

        .post {
          flex-direction: column;
          align-items: center;


          .title {
            font-size: 2vw;
            font-weight: bold;
            text-transform: uppercase;
            color: #333;
            box-shadow: $color-yellow 0 -1.3vw inset;
          }

          .date {
            font-size: 14px;
            color: black;
          }

          .description {
            width: 35vw;
            padding-top: 4vh;
            font-size: 1.5vw;
            text-align: justify;
            color: black;
          }
          .link {
            padding-top:1vh;
            font-size: 1.5vw;
            color: $color-red;
          }
        }
      }
    }

    @keyframes sub-appear {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
</style>