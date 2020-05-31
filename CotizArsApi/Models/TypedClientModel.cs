//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Net.Http;
//using System.Threading.Tasks;

//namespace CotizArs.Models
//{
//    public class TypedClientModel //: PageModel
//    {
//        private readonly CambioTodayService _CambioTodayService;
//        //public IEnumerable<GitHubIssue> LatestIssues { get; private set; }

//        //public bool HasIssue => LatestIssues.Any();

//        public bool GetIssuesError { get; private set; }

//        public TypedClientModel(CambioTodayService CambioTodayService)
//        {
//            _CambioTodayService = CambioTodayService;
//        }

//        public async Task OnGet()
//        {
//            try
//            {
//                //LatestIssues = await _CambioTodayService.GetAspNetDocsIssues();
//            }
//            catch (HttpRequestException)
//            {
//                GetIssuesError = true;
//                //LatestIssues = Array.Empty<GitHubIssue>();
//            }
//        }
//    }
//}
