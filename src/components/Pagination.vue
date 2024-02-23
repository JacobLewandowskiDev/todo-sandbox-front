<script scoped>
    export default {
        props: ["numOfPages"],

        data() {
            return {
                currentPage: 1
            };
        },
        
        computed: {
            pageIndexes() {
            return Array.from({ length: this.numOfPages }, (_, index) => index + 1);
            }
        },

        methods: {
            goToPage(pageIndex) {
                this.currentPage = pageIndex;
                this.$emit('pageChange', pageIndex);
            },
            goToPrevPage() {
                if (this.currentPage > 1) {
                    this.goToPage(this.currentPage - 1);
                }
            },
            goToNextPage() {
                if (this.currentPage < this.numOfPages) {
                    this.goToPage(this.currentPage + 1);
                }
            }
        }
    }
           
</script>

<template>
      <div class="pagination">
    <button class="pagination__button" :class="{ 'inactive': currentPage === 1}" @click="goToPrevPage()">&#60;</button>
    <div class="pagination__number" v-for="pageIndex in pageIndexes" :key="pageIndex" :class="{ 'active': pageIndex === currentPage }" @click="goToPage(pageIndex)"> {{ pageIndex }} </div>
    <button class="pagination__button" :class="{ 'inactive': currentPage === numOfPages}" @click="goToNextPage()">&#62;</button>
  </div>

</template>

<style scoped>
.pagination {
    margin: 3rem auto;
    width: 100%;
    height: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.pagination__button,
.pagination__button,
.pagination__number {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.1rem solid #c3c3c3;
    width: 3rem;
    margin: 0 0.5rem;
    font-size: 1.2rem;
    color: #2e43ff;
    font-weight: bold;
    background-color: #ffffff00;
    border-radius: 0.3rem;
    cursor: pointer;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
}

.active {
    background-color: #2e43ff;
    color: #ffffff;
    border: 0.1rem solid #2e43ff;
}

.inactive {
    color: #c3c3c3;
}

.pagination__button:active,
.pagination__button:active {
    color: #c3c3c3;
}

</style>