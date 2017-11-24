const images = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify([
      {
        image: ''
      }
    ])
  })
}

export default images
