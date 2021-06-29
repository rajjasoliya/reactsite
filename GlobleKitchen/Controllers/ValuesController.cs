using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace GlobleKitchen.Controllers
{
    public class kitchen
    {
        public string Name
        {
            get;
            set;
        }
        public string Id
        {
            get;
            set;
        }
        public string Desc
        {
            get;
            set;
        }

    }
    public class ValuesController : ApiController
    {
        private static List<kitchen> toolss = new List<kitchen>();

        static ValuesController()
        {
            kitchen tools = new kitchen();
            
            tools.Name = "A topic";
            tools.Id = "topicA";
            tools.Desc = "A topic is Exelent";
            toolss.Add(tools);

            kitchen tools1 = new kitchen();

            tools1.Name = "B topic";
            tools1.Id = "topicB";
            tools1.Desc = "B topic is Exelent";
            toolss.Add(tools1);
        }

        // GET api/values
        public IEnumerable<kitchen> Get()
        {
            return ValuesController.toolss;
        }

        // GET api/values/5
        public kitchen Get(string id)
        {
            return ValuesController.toolss.Where(tools => tools.Id.ToLower() == id.ToLower()).FirstOrDefault();
        }

        // POST api/values
        public void Post([FromBody] kitchen tools)
        {
            ValuesController.toolss.Add(tools);
        }

        // PUT api/values/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        public void Delete(string id)
        {
        }
    }
}
