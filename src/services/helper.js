export const succeshandler = (res) => res.data;

export const errorhandler = (err) => {
    console.log(err.message);
    throw err;
}