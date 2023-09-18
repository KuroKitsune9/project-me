<template>
    <div v-if="!isloaded">
                <center>
                    <img src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif" alt="Girl in a jacket" width="500"
                        height="600">
                </center>
            </div>
</template>
<script>
    export default {
        data: () => {
            return {
                isloaded: false
            }
        },
        mounted() {
            document.onreadystatechange = () => {
                if(document.readyState == "complete") {
                    this.isloaded = true;
                }
                
            }
        }
    }
</script>