module Main exposing (..)

import Html exposing (..)
import Html.Attributes exposing ( .. )
import Html.Events exposing (..)
import Material
import Material.Scheme
import Material.Button as Button
import Material.Layout as Layout
import Material.Options as Options exposing (css)

-- MODEL
type alias Model =
    {
        mdl :
            Material.Model
            -- Boilerplate: model store for any and all Mdl components you use.
    }
model : Model
model =
        {
            mdl =
                Material.model
                -- Boilerplate: Always use this initial Mdl model store.
        }

-- ACTION, UPDATE
type Msg
    = Mdl (Material.Msg Msg)

update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
    case msg of
        Mdl msg_ ->
            Material.update Mdl msg_ model



-- MESSAGES



-- VIEW

type alias Mdl =
    Material.Model

view : Model -> Html Msg
view model =
    Layout.render Mdl
        model.mdl
        [ Layout.fixedHeader
        , Layout.waterfall True
        ]
        { header = [ h1 [ style [ ( "padding", "1rem" ) ] ] [ text "Code Playground" ] ]
        , drawer =  []
        , tabs = ( [], [] )
        , main = [ viewBody model ]
        }

viewBody : Model -> Html Msg
viewBody model =
   div [] [
        editorGroup
       ]


editorGroup : Html msg
editorGroup =
   div [ class "editor-group" ] [
       textarea [ class "code-textarea", cols 40, rows 10, placeholder "HTML" ] [],
       textarea [ class "code-textarea", cols 40, rows 10, placeholder "CSS" ] [],
       textarea [ class "code-textarea", cols 40, rows 10, placeholder "JS" ] []
       ]

-- SUBSCRIPTIONSBuu


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none

-- MAIN

main : Program Never Model Msg
main =
    program
        { init = ( model, Cmd.none )
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
