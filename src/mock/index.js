import Mock from 'mockjs'

Mock.setup({
    timeout: 1000
})

Mock.mock( '/user/getall' , 'get', {
    'list|1-10': [{
        'id|+1': 1,
        'name': '@cname',
        'phone': /^1[34578]\d{9}$/,
        'email': '@EMAIL',
        'address': '@county(true)',
        'img': 'http://127.0.0.1:8088/test.jpg'
    }],
    response: {
        code: 200,
        message: 'success'
    }
})


