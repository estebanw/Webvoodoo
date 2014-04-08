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

        public HomeController(Sections sections)
        {
            this.Sections = sections;
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
            return PartialView();
        }

        [ChildActionOnly]
        public ActionResult Servicios()
        {
            return PartialView();
        }

        [ChildActionOnly]
        public ActionResult Espacio()
        {
            var path = this.HttpContext.Server.MapPath(Url.Content("~/Content/Images/Estudio"));
            var images = Directory.EnumerateFiles(path, "*.jpg");
            var relatives = images.Select(m => m.Replace(HttpContext.Request.ServerVariables["APPL_PHYSICAL_PATH"], "/").Replace(@"\", "/").Insert(0, "~")).ToList();
            return PartialView(relatives);
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
