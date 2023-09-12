import { Github, FileVideo, Upload, Wand2 } from "lucide-react";

import { Button } from "./components/ui/button";
import { Label } from "./components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Separator } from "./components/ui/separator";
import { Slider } from "./components/ui/slider";
import { Textarea } from "./components/ui/textarea";
export function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <header className="px-6 py-3 flex items-center justify-between border-b">
          <h1 className="text-xl font-bold"> upload.ai</h1>

          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">
              Desenvolvido por Mariano Capiliku no NLW da Rocketseat
            </span>

            <Separator orientation="vertical" className="h-6" />

            <Button variant="outline">
              <Github className="w-4 h-4 mr-2" />
              Github
            </Button>
          </div>
        </header>

        <main className="flex-1 p-6 flex gap-6">
          <div className="flex flex-col flex-1 gap-4">
            <div className="grid grid-rows-2 gap-4 flex-1">
              <Textarea
                placeholder="Inclua o prompt para a AI..."
                className="resize-none p-4 leading-relaxed"
              />
              <Textarea
                placeholder="Resultado gerado pela AI..."
                readOnly
                className="resize-none p-4 leading-relaxed"
              />
            </div>

            <p className="text-sm text-muted-foreground">
              Lembres-se você pode usar a variável transcription no seu prompt
              para adiconar o conteúsdo da{" "}
              <code className="text-violet-400">{"{transcription}"}</code> do
              video selecionado.
            </p>
          </div>

          <aside className="w-80 space-y-6 ">
            <form className="space-y-6">
              <label
                htmlFor="video"
                className="border flex flex-col rounded-md aspect-video cursor-pointer border-dashed text-sm text-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
              >
                <FileVideo className="w-6 h-6" />
                Selecione um Video
              </label>

              <input
                type="file"
                id="video"
                accept="video/mp4"
                className="sr-only"
              />

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="trasncription_prompt">
                  {" "}
                  Prompt de Transcricao
                </Label>
                <Textarea
                  id="transcription_prompt"
                  className="h-20 leading-relaxed resize-none"
                  placeholder="Inclua palavras chaves mencionadas no vídeo separadas por vírgulas (,) "
                />
              </div>

              <Button type="submit" className="text-sm w-full">
                Carregar Video
                <Upload className="w-3 h-3 ml-2" />
              </Button>
            </form>

            <Separator />

            <form className="space-y-6">
              <div className="space-y-2">
                <Label>Prompt</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um prompt" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="title"> Título do Youtube </SelectItem>
                    <SelectItem value="description">
                      {" "}
                      Descrição do Youtube{" "}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Modelo</Label>
                <Select disabled defaultValue="gpt3.5">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpt3.5"> GPT 3.5-turbo 16k </SelectItem>
                  </SelectContent>
                </Select>
                <span className="block text-xs text-muted-foreground italic">
                  Você poderá custpmizar essa opção em breve
                </span>
              </div>

              <Separator />

              <div className="space-y-4">
                <Label>Temperatura</Label>
                <Slider min={0} max={1} step={0.1} />
                <span className="block text-xs text-muted-foreground italic">
                  Valores mais altos tendem a deixar o resultado mais criativo e
                  com possiveis erros
                </span>
              </div>

              <Separator />

              <Button type="submit" className="w-full">
                Excutar
                <Wand2 className="h-4 w-4 ml-2" />
              </Button>
            </form>
          </aside>
        </main>
      </div>
    </>
  );
}
