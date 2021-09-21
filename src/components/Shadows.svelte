<script>
    export let top;
    export let bottom;

    export let width = 'auto';
    export let height;

    export let shadowWidth;
    export let shadowHeight;

    export let margin;

    $: size = `width: ${width}px; height: ${height}px;`;
    $: shadowSize = `width: ${shadowWidth}px; height: ${shadowHeight}px;`;
    $: topPosition = `top: -${margin}px; left: -${margin}px;`
    $: bottomPosition = `bottom: -${margin}px; right: -${margin}px;`
</script>

<div class="shadows" style={size}>
    <div class="shadow top {top}" style="{shadowSize} {topPosition}"></div>
    <div class="shadow bottom {bottom}" style="{shadowSize} {bottomPosition}"></div>

    <div class="shadows-content" style={size}>
        <slot />
    </div>
</div>

<style lang="scss">
    @import 'mixins';

    .shadows {
        position: relative;

        margin-left: 50px;
        margin-right: 75px;
    }

    .shadows-content {
        position: absolute;
        top: 0;

        :global(*) {
            flex-grow: 1;
        }
    }

    .shadow {
        position: absolute;

        @include colored();

        &.top {
            top: -50px;
            left: -50px;
        }

        &.bottom {
            bottom: -50px;
            right: -50px;
        }
    }
</style>
