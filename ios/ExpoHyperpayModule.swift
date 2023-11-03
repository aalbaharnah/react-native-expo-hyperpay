import ExpoModulesCore

public class ExpoHyperpayModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoHyperpay")

    Function("hello") {
      return "Hello world! 👋"
    }
  }
}
