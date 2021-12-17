<script context="module">
    /*export const load = async ({ fetch }) => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await res.json();
        return {
            props: {
                posts,
            },
        };
    };

    {#each posts as item }
        <div class="post">
            <img src={Hackathon} alt="Hackathon" width="400" height="250"/>
            <div class="title">{item.title.substring(0, 15)}</div>
            <div class="description">{item.body.substring(0, 80)}</div>
            <div class="link"><a sveltekit:prefetch href={`actu/${item.id}`}>Read More</a></div>
        </div>
    {/each}*/

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

<div id="header">
    <div class="left">
        <div class="inner">
            <h1>Toute L'Actu Gotta Go Hack</h1>
            <hr />
        </div>
    </div>
</div>

<div id="blog">
    <div class="postGrid">
        {#each posts as post}
                <div class="post">
                    <img src={post.metadata.image} alt={post.metadata.title} width="400" height="250"/>
                    <div class="title">{post.metadata.title.substring(0,30)}</div>
                    <div class="description">{post.metadata.description.substring(0,80)}</div>
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

      margin-left: 25px;
      margin-top: 50px;
      margin-bottom: 25px;

      .inner {
        flex-direction: column;

      }
    }
  }

    #blog {

      flex-direction: column;
      padding: 35px;
      background-color: white;

      .postGrid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 35px;
        padding: 35px;

        .post {
          flex-direction: column;
          align-items: center;


          .title {
            margin: 15px 0;
            padding: 0 5px;
            font-size: 32px;
            font-weight: bold;
            text-transform: uppercase;
            color: #333;
            box-shadow: $color-yellow 0 -20px inset;
          }

          .date {
            font-size: 14px;
            color: black;
          }

          .description {
            //width: 400px;
            margin-top: 20px;
            font-size: 20px;
            text-align: justify;
            color: black;
          }
          .link {
            margin-top:10px;
            font-size: 20px;
            color: $color-red;
          }
        }
      }
    }
</style>