export default function pageLoader(platform = "desktop") {
    switch (platform="desktop") {
      case "mobile":
        return import("components/C1Component");
      case "desktop":
        return import("components/C1Component");
    }
  }