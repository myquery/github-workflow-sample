const chai = require("chai");
const chaiHttp = require("chai-http")

const app = require("../index")

chai.use(chaiHttp)

chai.should()

describe("Endpoint Test Nodejs server endpoint", ()=> {
    it("it should test nodejs endpoint", (done)=> {
        chai.request(app).get("/test").end((err, res)=> {
            res.should.have.status(200)
            done()
        })
    })
})
