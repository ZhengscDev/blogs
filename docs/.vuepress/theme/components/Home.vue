<template>
    <section class="home">
        <div class="home-overlay"></div>
        <div class="home-intro">
            <div class="home-intro-wrapper">
                <p class="italic">Hello, nice to meet you!</p>
                <h1>WELCOME TO MY BLOG!</h1>
                <p class="italic">Professional & Creative & Freedom & Love.</p>
                <NavLink class="continue-button" :item="{ text:'ABOUT ME', link: '/about/' }"/>
            </div>
        </div>
    </section>
</template>

<script>
    import NavLink from "./NavLink";

    export default {
        data() {
            return {
                hyBackTextOpacity: 0,
                direction: 1
            }
        },

        mounted() {
            // this.hyBackTextTimer = setInterval(() => {
            //     if (this.direction === 1) {
            //         this.hyBackTextOpacity++
            //     } else {
            //         this.hyBackTextOpacity--
            //     }
            //
            //     if (this.hyBackTextOpacity == 70) {
            //         this.direction = 0
            //     }
            //     if (this.hyBackTextOpacity == 0) {
            //         this.direction = 1
            //     }
            // }, 10)
        },

        destroyed() {
            // clearInterval(this.hyBackTextTimer)
        },

        components: {
            NavLink
        }
    };
</script>

<style lang="stylus">
    .home {
        background-image url("../../public/y1_AAA_1997.jpg");
        position: relative;
        width: 100%;
        height: 100%;
        color: #fff;
        background-color: #111;
        min-height: 600px;
        padding: 0;
        background-size: cover;
        background-position: center 40%;
        overflow: hidden;
        background-attachment: fixed;
        @media (max-width: $MQMobile) {
            background-size: cover;
            background-position: center;
            overflow: hidden;
            background-attachment: fixed;
        }
    }

    .home-overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: #000;
        z-index: 2;
        opacity: 0.6;
    }

    .home-intro {
        z-index: 3;
        color: $colorLight;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        display: flex;
        align-content: center;
        justify-content: center;
        margin: auto;

        .home-intro-wrapper {
            padding: 1.5rem;
            height: 240px;
            margin-top: 30%;

            @media (max-width: $MQMobile) {
                margin-top: 86%;
            }
        }

        .continue-button {
            font-family: Arial;
            letter-spacing: 2px;
            text-transform: uppercase;
            display: block;
            margin-top: 2rem;
            width: 200px;
            height: 50px;
            outline: none;
            border: 2px solid $colorLight;
            background: transparent;
            color: $colorLight;
            font-size: 24px;
            transition: background 0.3s;
            cursor: pointer;
            font-weight: lighter;
            display: flex;
            justify-content: center;
            align-items: center;

            @media (min-width: $MQMobile) {
                float: right;
            }

            &:hover {
                background: $colorLight;
                color: $colorDark;
            }
        }
    }

    .home-intro p {
        font-style: italic;
        color: #fff;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
    }

    h1 {
        font-family: 'Montserrat', sans-serif;
    }
</style>
