import { getShoppingCart } from "../utils/fakeDb";


   export const jobAndData = async() => {

        const jobsData = await fetch('FeaturedJobs.json')

        const jobs = await jobsData.json()

        const savedCart = getShoppingCart();
        let newArr = []


        for (const id in savedCart) {

            const foundJob = jobs.find((job) => job.id === id);
      
            if (foundJob) {
              foundJob.quantity = savedCart[id];
              newArr.push(foundJob)
            }
          }
          return {newArr, jobs}
    }

    