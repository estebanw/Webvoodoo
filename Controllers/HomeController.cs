using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Voodoo.Models;

namespace Voodoo.Controllers
{
    public class HomeController : Controller
    {
        private Sections Sections { get; set; }
        private ContentProvider ContentProvider { get; set; }

        public HomeController(
              Sections sections
            , ContentProvider contentProvider
        )
        {
            this.Sections = sections;
            this.ContentProvider = contentProvider;
        }

        public ActionResult Index()
        {
            return View(this.Sections);
        }

        [ChildActionOnly]
        public ActionResult Home()
        {
            return PartialView();
        }

        [ChildActionOnly]
        public ActionResult Trabajos()
        {
            var videos = ContentProvider.GetVideos();
            return PartialView(videos);
        }

        [ChildActionOnly]
        public ActionResult Servicios()
        {
            return PartialView();
        }

        [ChildActionOnly]
        public ActionResult Espacio()
        {
            var photos = ContentProvider.GetPhotos();
            return PartialView(photos);
        }

        [ChildActionOnly]
        public ActionResult Nosotros()
        {
            return PartialView();
        }

        [ChildActionOnly]
        public ActionResult Clientes()
        {
            return PartialView();
        }

        [ChildActionOnly]
        public ActionResult Contacto()
        {
            return PartialView();
        }

        [ChildActionOnly]
        public ActionResult Mapa()
        {
            return PartialView();
        }

        [ChildActionOnly]
        public ActionResult Header()
        {
            return PartialView(this.Sections.Where(m => m.ShowInToolbar).ToList());
        }


        [ChildActionOnly]
        public ActionResult Footer()
        {
            return PartialView();
        }

    }

    public static class Extensions
    {
        public static string RelativePath(this HttpServerUtility utility, string path, HttpRequest context)
        {
            return path.Replace(context.ServerVariables["APPL_PHYSICAL_PATH"], "/").Replace(@"\", "/");
        }
    }
}
