package expo.modules.hyperpay

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoHyperpayModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoHyperpay")

    Function("hello") {
      "Hello world! 👋"
    }
  }
}
