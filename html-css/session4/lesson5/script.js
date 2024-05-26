// promises 
        // function fetchData() {
        //     return new Promise((resolve, reject) => {
        //         // Simulating an asynchronous operation
        //         setTimeout(() => {
        //             // const data = { id: 1, name: 'John Doe' };
        //             const data = null;
        //             if (data) {
        //                 resolve(data); // Promise is fulfilled
        //             } else {
        //                 reject('Error occurred'); // Promise is rejected
        //             }
        //         }, 2000);
        //     });
        // }

        // fetchData()
        // .then(data => {
        //     console.log('Success:', data);
        // })
        // .catch(error => {
        //     console.log('Error:', error);
        // });


        // async await example

        function resolveAfter2Seconds() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('Resolved');
                }, 2000);
            });
        }

        function resolveAfter3Seconds() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('Resolved');
                }, 3000);
            });
        }

        function resolveAfter5Seconds() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('Resolved');
                }, 5000);
            });
        }

        // then catch

        resolveAfter2Seconds().then(res=>{
            resolveAfter3Seconds().then(res=>{
                resolveAfter5Seconds(res=>{
                }).catch(err=>{

                })
            }).catch(err=>{

            })
        }).catch(err=>{
            console.log(err)
        })

        // async await

        async function test(){
            await resolveAfter2Seconds()
            await resolveAfter3Seconds()
            await resolveAfter5Seconds()
        }
        test()