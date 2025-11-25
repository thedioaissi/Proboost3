import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function SignUpSuccessPage() {
  return (
    <div className="flex min-h-[80vh] w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <CardTitle className="text-2xl text-center">Inscription réussie !</CardTitle>
            <CardDescription className="text-center">Vérifiez votre email pour confirmer votre compte</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground text-center text-pretty">
              Vous avez reçu un email de confirmation. Veuillez cliquer sur le lien dans l'email pour activer votre
              compte avant de vous connecter.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
