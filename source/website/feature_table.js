"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[934],{551:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(601),i=r.n(n),D=r(314),o=r.n(D)()(i());o.push([e.id,'body {\n    min-width:fit-content;\n}\n\n.FeatureTable {\n    font-family: "Roboto", sans-serif;\n}\n\n.FeatureTable thead {\n    position: sticky;\n    top: 0;\n    z-index: 2;\n}\n\n.FeatureTable thead tr {\n    background-color: #00000000;\n}\n\n.Microsoft {\n    background-color: #d0e7f2;\n}\n\n.AMD {\n    background-color: #f2d0d0;\n}\n\n.Nvidia {\n    background-color: #d0f2d0;\n}\n\n.Intel {\n    background-color: #d0d0f2;\n}\n\n.Qualcomm {\n    background-color: #f2e7d0;\n}\n\ntd {\n    white-space: pre-wrap;\n}\n\n.FeatureHeader {\n    text-align: center;\n    min-width: 14em;\n}\n\nth,\n.FeatureHeader {\n    font-weight: 600;\n}\n\nth,\ntd {\n    border-width: 1px;\n    border-style: solid;\n    border-color: #7f7f7f;\n}\n\ntd {\n    text-align: center;\n    padding: 2px 4px;\n    min-width: 4.5em;\n}\n\ntr:nth-of-type(odd) {\n    background-color: #00000010;\n}\n\ntd:nth-of-type(even) {\n    background-color: #00000010;\n}\n\ntable {\n    border-collapse: collapse;\n    margin: auto;\n}\n\ncolgroup {\n    border-inline-end-width: 2px;\n    border-inline-end-style: solid;\n    border-inline-end-color: #7f7f7f;\n}\n\n/* sticky table headers */\nth {\n    position: sticky !important;\n}\n\n/* row of headers with vendor names */\nthead>tr:first-of-type>th {\n    top: -1px;\n    /* first row sticks to the top of the screen */\n    border-bottom: none;\n}\n\n/* row of headers with architecture names */\nthead>tr:nth-of-type(2)>th {\n    top: 1.3em;\n    /* second row sticks right below first row */\n    border-top: none;\n    border-bottom-width: 2px;\n    border-bottom-style: solid;\n    padding-inline: 0.3em;\n    /* separate arch names a little */\n}\n\n#FilterContainer {\n    display: flex;\n}\n\n.tooltip {\n    position: relative;\n}\n\n.tooltiptext {\n    visibility: hidden;\n    background-color: #FFFFFF;\n    text-align: left;\n    border-radius: 0.4em;\n    border-color: #7f7f7f;\n    border-style: solid;\n    border-width: 0.1em;\n    padding: 0.3em;\n    position: absolute;\n    z-index: 3;\n    opacity: 0;\n    transition: opacity 150ms ease-in, visibility 0ms ease-in 150ms;\n}\n\n.tooltiptextbottomright {\n    top: 110%;\n    left: 95%;\n    transform: translateX(-100%);\n}\n\n.tooltiptextbottomcenter {\n    top: 110%;\n    left: 50%;\n    transform: translateX(-50%);\n}\n\n.tooltiptextbottomleft {\n    top: 110%;\n    left: 5%;\n}\n\n.tooltiptexttop {\n    bottom: 110%;\n    left: 0%;\n}\n\n.tooltip:hover .tooltiptext {\n    visibility: visible;\n    opacity: 1;\n    transition-delay: 0ms;\n}\n\n.white_space_pre {\n    white-space: pre;\n}\n\n\n@media (prefers-color-scheme: dark) {\n\n    th,\n    td {\n        border-color: #8c8c8c;\n    }\n\n    colgroup {\n        border-inline-end-color: #8c8c8c;\n    }\n\n    table,\n    fieldset {\n        border-color: #8c8c8c;\n        background-color: #2d2d2d;\n    }\n\n\n    tr:nth-of-type(1) {\n        background-color: #262626;\n    }\n\n    td {\n        border-color: #FFFFFF33;\n    }\n\n    tr:nth-of-type(odd) {\n        background-color: #00000020;\n    }\n\n    td:nth-of-type(even) {\n        background-color: #00000020;\n    }\n\n    .Microsoft {\n        background-color: #1c262b;\n    }\n\n    .AMD {\n        background-color: #220000;\n    }\n\n    .Nvidia {\n        background-color: #002200;\n    }\n\n    .Intel {\n        background-color: #000022;\n    }\n\n    .Qualcomm {\n        background-color: #231e16;\n    }\n\n    .tooltiptext {\n        background-color: #000000;\n        border-color: #8c8c8c;\n    }\n\n}',""]);const a=o},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,i,D){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(n)for(var a=0;a<this.length;a++){var _=this[a][0];null!=_&&(o[_]=!0)}for(var A=0;A<e.length;A++){var T=[].concat(e[A]);n&&o[T[0]]||(void 0!==D&&(void 0===T[5]||(T[1]="@layer".concat(T[5].length>0?" ".concat(T[5]):""," {").concat(T[1],"}")),T[5]=D),r&&(T[2]?(T[1]="@media ".concat(T[2]," {").concat(T[1],"}"),T[2]=r):T[2]=r),i&&(T[4]?(T[1]="@supports (".concat(T[4],") {").concat(T[1],"}"),T[4]=i):T[4]="".concat(i)),t.push(T))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var D={},o=[],a=0;a<e.length;a++){var _=e[a],A=n.base?_[0]+n.base:_[0],T=D[A]||0,d="".concat(A," ").concat(T);D[A]=T+1;var p=r(d),s={css:_[1],media:_[2],sourceMap:_[3],supports:_[4],layer:_[5]};if(-1!==p)t[p].references++,t[p].updater(s);else{var l=i(s,n);n.byIndex=a,t.splice(a,0,{identifier:d,updater:l,references:1})}o.push(d)}return o}function i(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,i){var D=n(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<D.length;o++){var a=r(D[o]);t[a].references--}for(var _=n(e,i),A=0;A<D.length;A++){var T=r(D[A]);0===t[T].references&&(t[T].updater(),t.splice(T,1))}D=_}}},659:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var i=void 0!==r.layer;i&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,i&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var D=r.sourceMap;D&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(D))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},37:(e,t,r)=>{var n=r(72),i=r.n(n),D=r(825),o=r.n(D),a=r(659),_=r.n(a),A=r(56),T=r.n(A),d=r(540),p=r.n(d),s=r(113),l=r.n(s),c=r(551),E={};E.styleTagTransform=l(),E.setAttributes=T(),E.insert=_().bind(null,"head"),E.domAPI=o(),E.insertStyleElement=p(),i()(c.A,E),c.A&&c.A.locals&&c.A.locals;var u=r(480),S=r(924),O=r(878),R=r(568);const I={RDNA3:.0051,Unkonwn:.044700000000000004,GCN1:.0009000000000000001,GCN4:.0181,GCN3:4e-4,GCN2:1e-4,RDNA:.0081,RDNA2:.027700000000000002,Vega:.0065,"Gen7.5":.0015999999999999999,Gen9:.0025,Gen8:7e-4,"Gen9.5":.0094,Xe:.0146,Maxwell1:.0039000000000000003,Kepler:.0016,Fermi:2e-4,Pascal:.06250000000000001,Turing:.1407,Fermi1:3e-4,Maxwell2:.0063,Ampere:.2645,Ada:.34179999999999994,X1:2e-4};var P=r(185);let m=[];const h={0:"❌",1:"✅"},F={TableReleaseDate:"Release Date",TableMarketShare:"Market Share",TableNumReports:"Number of reports",TableReportUsed:"Report used for feature data",TableD3d12InfoVersion:"D3d12info version","D3D12_FEATURE_DATA_FEATURE_LEVELS.MaxSupportedFeatureLevel":"Feature level","D3D12_FEATURE_DATA_SHADER_MODEL.HighestShaderModel":"Shader model","D3D12_FEATURE_DATA_D3D12_OPTIONS.ResourceBindingTier":"Resource binding","D3D12_FEATURE_DATA_D3D12_OPTIONS.ResourceHeapTier":"Resource heap","D3D12_FEATURE_DATA_D3D12_OPTIONS.TiledResourcesTier":"Tiled resources","D3D12_FEATURE_DATA_D3D12_OPTIONS5.SRVOnlyTiledResourceTier3":"SRV-only tiled resource tier 3","D3D12_FEATURE_DATA_D3D12_OPTIONS5.RaytracingTier":"Raytracing","D3D12_FEATURE_DATA_D3D12_OPTIONS7.MeshShaderTier":"Mesh shaders","D3D12_FEATURE_DATA_D3D12_OPTIONS21.WorkGraphsTier":"Work graphs","D3D12_FEATURE_DATA_D3D12_OPTIONS6.VariableShadingRateTier":"Variable-rate shading","D3D12_FEATURE_DATA_D3D12_OPTIONS7.SamplerFeedbackTier":"Sampler feedback","D3D12_FEATURE_DATA_D3D12_OPTIONS21.ExecuteIndirectTier":"Execute indirect","D3D12_FEATURE_DATA_D3D12_OPTIONS.ConservativeRasterizationTier":"Conservative rasterization","D3D12_FEATURE_DATA_D3D12_OPTIONS12.EnhancedBarriersSupported":"Enhanced barriers","D3D12_FEATURE_DATA_D3D12_OPTIONS16.GPUUploadHeapSupported":"GPU upload heaps","D3D12_FEATURE_DATA_D3D12_OPTIONS5.RenderPassesTier":"Render passes","D3D12_FEATURE_DATA_ARCHITECTURE1.TileBasedRenderer":"Tile-based renderer","D3D12_FEATURE_DATA_D3D12_OPTIONS1.WaveOps":"Wave ops","D3D12_FEATURE_DATA_D3D12_OPTIONS1.WaveLaneCountMin":"Wave lane count min","D3D12_FEATURE_DATA_D3D12_OPTIONS1.WaveLaneCountMax":"Wave lane count max","D3D12_FEATURE_DATA_ROOT_SIGNATURE.HighestVersion":"Root signature version","D3D12_FEATURE_DATA_D3D12_OPTIONS.MinPrecisionSupport":"Min-precision support","D3D12_FEATURE_DATA_D3D12_OPTIONS4.Native16BitShaderOpsSupported":"Native 16-bit shader ops","D3D12_FEATURE_DATA_D3D12_OPTIONS.DoublePrecisionFloatShaderOps":"64-bit float shader ops","D3D12_FEATURE_DATA_D3D12_OPTIONS1.Int64ShaderOps":"64-bit int shader ops","D3D12_FEATURE_DATA_D3D12_OPTIONS9.AtomicInt64OnTypedResourceSupported":"64-bit int atomics on typed resource","D3D12_FEATURE_DATA_D3D12_OPTIONS9.AtomicInt64OnGroupSharedSupported":"64-bit int atomics on group shared","D3D12_FEATURE_DATA_D3D12_OPTIONS11.AtomicInt64OnDescriptorHeapResourceSupported":"64-bit int atomics on descriptor heap resources","D3D12_FEATURE_DATA_D3D12_OPTIONS9.WaveMMATier":"WaveMMA (wave_matrix)","D3D12_FEATURE_DATA_D3D12_OPTIONS3.ViewInstancingTier":"View instancing","D3D12_FEATURE_DATA_D3D12_OPTIONS3.BarycentricsSupported":"Barycentrics","D3D12_FEATURE_DATA_D3D12_OPTIONS.OutputMergerLogicOp":"Output merger logic ops","D3D12_FEATURE_DATA_D3D12_OPTIONS3.CastingFullyTypedFormatSupported":"Casting fully typed formats","D3D12_FEATURE_DATA_D3D12_OPTIONS12.RelaxedFormatCastingSupported":"Relaxed format casting","D3D12_FEATURE_DATA_D3D12_OPTIONS.TypedUAVLoadAdditionalFormats":"Typed UAV loads for additional formats","D3D12_FEATURE_DATA_D3D12_OPTIONS.ROVsSupported":"Rasterizer-ordered views","D3D12_FEATURE_DATA_D3D12_OPTIONS.VPAndRTArrayIndexFromAnyShaderFeedingRasterizerSupportedWithoutGSEmulation":"VP & RT array index without GS emulation","D3D12_FEATURE_DATA_D3D12_OPTIONS.PSSpecifiedStencilRefSupported":"PS-specified StencilRef","D3D12_FEATURE_DATA_D3D12_OPTIONS2.DepthBoundsTestSupported":"Depth-bounds test","D3D12_FEATURE_DATA_D3D12_OPTIONS2.ProgrammableSamplePositionsTier":"Programmable sample positions","D3D12_FEATURE_DATA_D3D12_OPTIONS3.CopyQueueTimestampQueriesSupported":"Copy queue timestamp queries","D3D12_FEATURE_DATA_D3D12_OPTIONS3.WriteBufferImmediateSupportFlags":"WriteBufferImmediate command list support","D3D12_FEATURE_DATA_D3D12_OPTIONS4.MSAA64KBAlignedTextureSupported":"64KB-aligned MSAA textures","D3D12_FEATURE_DATA_D3D12_OPTIONS4.SharedResourceCompatibilityTier":"Shared resources compatibility","D3D12_FEATURE_DATA_D3D12_OPTIONS6.AdditionalShadingRatesSupported":"Additional shading rates","D3D12_FEATURE_DATA_D3D12_OPTIONS6.PerPrimitiveShadingRateSupportedWithViewportIndexing":"Per-primitive shading rate with viewport indexing","D3D12_FEATURE_DATA_D3D12_OPTIONS6.ShadingRateImageTileSize":"Shading-rate image tile size","D3D12_FEATURE_DATA_D3D12_OPTIONS10.VariableRateShadingSumCombinerSupported":"VRS sum combiner","D3D12_FEATURE_DATA_D3D12_OPTIONS10.MeshShaderPerPrimitiveShadingRateSupported":"Mesh shader per-primitive shading rate","D3D12_FEATURE_DATA_D3D12_OPTIONS9.MeshShaderPipelineStatsSupported":"Mesh shader pipeline stats","D3D12_FEATURE_DATA_D3D12_OPTIONS9.MeshShaderSupportsFullRangeRenderTargetArrayIndex":"Mesh shader full range RT array index","D3D12_FEATURE_DATA_D3D12_OPTIONS9.DerivativesInMeshAndAmplificationShadersSupported":"Derivatives in mesh and amplification shaders","D3D12_FEATURE_DATA_D3D12_OPTIONS8.UnalignedBlockTexturesSupported":"Unaligned block textures","D3D12_FEATURE_DATA_D3D12_OPTIONS13.UnrestrictedBufferTextureCopyPitchSupported":"Unrestricted buffer-texture copy pitch","D3D12_FEATURE_DATA_D3D12_OPTIONS13.UnrestrictedVertexElementAlignmentSupported":"Unrestricted vertex element alignment","D3D12_FEATURE_DATA_D3D12_OPTIONS13.InvertedViewportHeightFlipsYSupported":"Inverted viewport height flips Y","D3D12_FEATURE_DATA_D3D12_OPTIONS13.InvertedViewportDepthFlipsZSupported":"Inverted viewport depth flips Z","D3D12_FEATURE_DATA_D3D12_OPTIONS13.TextureCopyBetweenDimensionsSupported":"Texture copy between dimensions","D3D12_FEATURE_DATA_D3D12_OPTIONS13.AlphaBlendFactorSupported":"Alpha blend factor","D3D12_FEATURE_DATA_D3D12_OPTIONS14.AdvancedTextureOpsSupported":"Advanced texture ops","D3D12_FEATURE_DATA_D3D12_OPTIONS14.WriteableMSAATexturesSupported":"Writeable MSAA textures","D3D12_FEATURE_DATA_D3D12_OPTIONS14.IndependentFrontAndBackStencilRefMaskSupported":"Independent front & back StencilRef mask","D3D12_FEATURE_DATA_D3D12_OPTIONS15.TriangleFanSupported":"Triangle fans","D3D12_FEATURE_DATA_D3D12_OPTIONS15.DynamicIndexBufferStripCutSupported":"Dynamic index buffer strip cut","D3D12_FEATURE_DATA_D3D12_OPTIONS16.DynamicDepthBiasSupported":"Dynamic depth bias","D3D12_FEATURE_DATA_D3D12_OPTIONS17.NonNormalizedCoordinateSamplersSupported":"Non-normalized coordinate samplers","D3D12_FEATURE_DATA_D3D12_OPTIONS19.MismatchingOutputDimensionsSupported":"Mismatching output dimensions","D3D12_FEATURE_DATA_D3D12_OPTIONS19.SupportedSampleCountsWithNoOutputs":"MSAA sample counts with no outputs","D3D12_FEATURE_DATA_D3D12_OPTIONS19.PointSamplingAddressesNeverRoundUp":"Point sampling addresses never round up","D3D12_FEATURE_DATA_D3D12_OPTIONS21.SampleCmpGradientAndBiasSupported":"SampleCmp gradient and bias","D3D12_FEATURE_DATA_D3D12_OPTIONS19.RasterizerDesc2Supported":"RASTERIZER_DESC2 supported","D3D12_FEATURE_DATA_D3D12_OPTIONS19.NarrowQuadrilateralLinesSupported":"Narrow quadrilateral lines","D3D12_FEATURE_DATA_D3D12_OPTIONS19.AnisoFilterWithPointMipSupported":"Aniso filter with point mip","D3D12_FEATURE_DATA_D3D12_OPTIONS19.MaxSamplerDescriptorHeapSize":"Max sampler heap size","D3D12_FEATURE_DATA_D3D12_OPTIONS19.MaxSamplerDescriptorHeapSizeWithStaticSamplers":"Max sampler heap size with static samplers","D3D12_FEATURE_DATA_D3D12_OPTIONS19.MaxViewDescriptorHeapSize":"Max view descriptor heap size","D3D12_FEATURE_DATA_D3D12_OPTIONS12.MSPrimitivesPipelineStatisticIncludesCulledPrimitives":"MSPrimitives pipeline statistic includes culled primitives","D3D12_FEATURE_DATA_D3D12_OPTIONS6.BackgroundProcessingSupported":"Background processing","D3D12_FEATURE_DATA_EXISTING_HEAPS.Supported":"Heaps from existing memory","D3D12_FEATURE_DATA_GPU_VIRTUAL_ADDRESS_SUPPORT.MaxGPUVirtualAddressBitsPerResource":"Per-resource virtual addressing","D3D12_FEATURE_DATA_GPU_VIRTUAL_ADDRESS_SUPPORT.MaxGPUVirtualAddressBitsPerProcess":"Per-process virtual addressing","D3D12_FEATURE_DATA_ARCHITECTURE1.IsolatedMMU":"Isolated MMU","D3D12_FEATURE_DATA_SERIALIZATION.HeapSerializationTier":"Heap serialization","D3D12_FEATURE_DATA_D3D12_OPTIONS.StandardSwizzle64KBSupported":"64KB standard swizzle textures","D3D12_FEATURE_DATA_D3D12_OPTIONS.CrossAdapterRowMajorTextureSupported":"Cross-adapter row-major textures","D3D12_FEATURE_DATA_CROSS_NODE.SharingTier":"Cross-node sharing","D3D12_FEATURE_DATA_CROSS_NODE.AtomicShaderInstructions":"Cross-node atomics","D3D12_FEATURE_DATA_D3D12_OPTIONS21.ExtendedCommandInfoSupported":"Extended command info","D3D12_FEATURE_DATA_D3D12_OPTIONS20.RecreateAtTier":"Recreate resource at pointer","D3D12_FEATURE_DATA_D3D12_OPTIONS19.ComputeOnlyCustomHeapSupported":"Compute-only custom heap","D3D12_FEATURE_DATA_D3D12_OPTIONS20.ComputeOnlyWriteWatchSupported":"Compute-only write watch","D3D12_FEATURE_DATA_PREDICATION.Supported":"Predication","D3D12_FEATURE_DATA_HARDWARE_COPY.Supported":"Hardware copy"},U={"D3D12_FEATURE_DATA_D3D12_OPTIONS.MinPrecisionSupport":{0:"❌",1:"10-bit",2:"16-bit"},"D3D12_FEATURE_DATA_SHADER_CACHE.SupportFlags":{0:"NONE",1:"SINGLE_PSO",2:"LIBRARY",4:"AUTOMATIC_INPROC_CACHE",8:"AUTOMATIC_DISK_CACHE",16:"DRIVER_MANAGED_CACHE",32:"SHADER_CONTROL_CLEAR",64:"SHADER_SESSION_DELETE"},"D3D12_FEATURE_DATA_D3D12_OPTIONS3.WriteBufferImmediateSupportFlags":{0:"❌",1:"Direct",2:"Bundle",4:"Compute",8:"Copy",16:"Video Decode",32:"Video Process",64:"Video Encode"},"D3D12_FEATURE_DATA_D3D12_OPTIONS19.SupportedSampleCountsWithNoOutputs":{1:"1",2:"2",4:"4",8:"8",16:"16",32:"32",64:"64"}},N={"DXGI_ADAPTER_DESC3.GraphicsPreemptionGranularity":{0:"DMA_BUFFER",1:"PRIMITIVE",2:"TRIANGLE",3:"PIXEL",4:"INSTRUCTION"},"DXGI_ADAPTER_DESC3.ComputePreemptionGranularity":{0:"DMA_BUFFER",1:"DISPATCH",2:"THREAD_GROUP",3:"THREAD",4:"INSTRUCTION"},"D3D12_FEATURE_DATA_D3D12_OPTIONS.TiledResourcesTier":{0:"❌",1:"Tier 1",2:"Tier 2",3:"Tier 3",4:"Tier 4"},"D3D12_FEATURE_DATA_D3D12_OPTIONS.ResourceBindingTier":{1:"Tier 1",2:"Tier 2",3:"Tier 3"},"D3D12_FEATURE_DATA_D3D12_OPTIONS.ConservativeRasterizationTier":{0:"❌",1:"Tier 1",2:"Tier 2",3:"Tier 3"},"D3D12_FEATURE_DATA_D3D12_OPTIONS.CrossNodeSharingTier":{0:"❌",1:"Tier 1 (emulated)",2:"Tier 1",3:"Tier 2",4:"Tier 3"},"D3D12_FEATURE_DATA_D3D12_OPTIONS.ResourceHeapTier":{1:"Tier 1",2:"Tier 2"},"D3D12_FEATURE_DATA_FEATURE_LEVELS.MaxSupportedFeatureLevel":{37120:"9_1",37376:"9_2",37632:"9_3",40960:"10_0",41216:"10_1",45056:"11_0",45312:"11_1",49152:"12_0",49408:"12_1",49664:"12_2"},"D3D12_FEATURE_DATA_SHADER_MODEL.HighestShaderModel":{81:"5.1",96:"6.0",97:"6.1",98:"6.2",99:"6.3",100:"6.4",101:"6.5",102:"6.6",103:"6.7",104:"6.8",105:"6.9"},"D3D12_FEATURE_DATA_ROOT_SIGNATURE.HighestVersion":{1:"1.0",2:"1.1",3:"1.2"},"D3D12_FEATURE_DATA_D3D12_OPTIONS2.ProgrammableSamplePositionsTier":{0:"❌",1:"Tier 1",2:"Tier 2"},"D3D12_FEATURE_DATA_D3D12_OPTIONS3.ViewInstancingTier":{0:"❌",1:"Tier 1",2:"Tier 2",3:"Tier 3"},"D3D12_FEATURE_DATA_D3D12_OPTIONS4.SharedResourceCompatibilityTier":{0:"Tier 0",1:"Tier 1",2:"Tier 2"},"D3D12_FEATURE_DATA_SERIALIZATION.HeapSerializationTier":{0:"❌",10:"✅"},"D3D12_FEATURE_DATA_CROSS_NODE.SharingTier":{0:"❌",1:"Tier 1 (emulated)",2:"Tier 1",3:"Tier 2",4:"Tier 3"},"D3D12_FEATURE_DATA_D3D12_OPTIONS_EXPERIMENTAL.WorkGraphsTier":{0:"❌",1:"Tier 0.1",10:"Tier 1.0",11:"Tier 1.1"},"D3D12_FEATURE_DATA_D3D12_OPTIONS5.RenderPassesTier":{0:"Tier 0",1:"Tier 1",2:"Tier 2"},"D3D12_FEATURE_DATA_D3D12_OPTIONS5.RaytracingTier":{0:"❌",10:"Tier 1.0",11:"Tier 1.1"},"D3D12_FEATURE_DATA_DISPLAYABLE.SharedResourceCompatibilityTier":{0:"Tier 0",1:"Tier 1",2:"Tier 2"},"D3D12_FEATURE_DATA_D3D12_OPTIONS6.VariableShadingRateTier":{0:"❌",1:"Tier 1",2:"Tier 2"},"D3D12_FEATURE_DATA_D3D12_OPTIONS7.MeshShaderTier":{0:"❌",10:"✅"},"D3D12_FEATURE_DATA_D3D12_OPTIONS7.SamplerFeedbackTier":{0:"❌",90:"Tier 0.9",100:"Tier 1.0"},"D3D12_FEATURE_DATA_D3D12_OPTIONS9.WaveMMATier":{0:"❌",10:"✅"},"D3D12_FEATURE_DATA_D3D12_OPTIONS12.MSPrimitivesPipelineStatisticIncludesCulledPrimitives":{"-1":"❓",0:"❌",1:"✅"},"D3D12_FEATURE_DATA_D3D12_OPTIONS20.RecreateAtTier":{0:"❌",1:"✅"},"D3D12_FEATURE_DATA_D3D12_OPTIONS21.WorkGraphsTier":{0:"❌",10:"Tier 1.0",11:"Tier 1.1"},"D3D12_FEATURE_DATA_D3D12_OPTIONS21.ExecuteIndirectTier":{10:"Tier 1.0",11:"Tier 1.1"},"D3D12_FEATURE_DATA_D3D12_OPTIONS.DoublePrecisionFloatShaderOps":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS.OutputMergerLogicOp":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS.PSSpecifiedStencilRefSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS.TypedUAVLoadAdditionalFormats":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS.ROVsSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS.StandardSwizzle64KBSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS.CrossAdapterRowMajorTextureSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS.VPAndRTArrayIndexFromAnyShaderFeedingRasterizerSupportedWithoutGSEmulation":h,"D3D12_FEATURE_DATA_ARCHITECTURE1.TileBasedRenderer":h,"D3D12_FEATURE_DATA_ARCHITECTURE1.UMA":h,"D3D12_FEATURE_DATA_ARCHITECTURE1.CacheCoherentUMA":h,"D3D12_FEATURE_DATA_ARCHITECTURE1.IsolatedMMU":h,"D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_DIRECT.PRIORITY_NORMAL.PriorityForTypeIsSupported":h,"D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_DIRECT.PRIORITY_HIGH.PriorityForTypeIsSupported":h,"D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_DIRECT.PRIORITY_GLOBAL_REALTIME.PriorityForTypeIsSupported":h,"D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COMPUTE.PRIORITY_NORMAL.PriorityForTypeIsSupported":h,"D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COMPUTE.PRIORITY_HIGH.PriorityForTypeIsSupported":h,"D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COMPUTE.PRIORITY_GLOBAL_REALTIME.PriorityForTypeIsSupported":h,"D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COPY.PRIORITY_NORMAL.PriorityForTypeIsSupported":h,"D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COPY.PRIORITY_HIGH.PriorityForTypeIsSupported":h,"D3D12_FEATURE_DATA_COMMAND_QUEUE_PRIORITY.TYPE_COPY.PRIORITY_GLOBAL_REALTIME.PriorityForTypeIsSupported":h,"D3D12_FEATURE_DATA_CROSS_NODE.AtomicShaderInstructions":h,"D3D12_FEATURE_DATA_PREDICATION.Supported":h,"D3D12_FEATURE_DATA_HARDWARE_COPY.Supported":h,"D3D12_FEATURE_DATA_APPLICATION_SPECIFIC_DRIVER_STATE.Supported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS1.WaveOps":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS1.ExpandedComputeResourceStates":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS1.Int64ShaderOps":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS2.DepthBoundsTestSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS3.CopyQueueTimestampQueriesSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS3.CastingFullyTypedFormatSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS3.BarycentricsSupported":h,"D3D12_FEATURE_DATA_EXISTING_HEAPS.Supported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS4.MSAA64KBAlignedTextureSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS4.Native16BitShaderOpsSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS5.SRVOnlyTiledResourceTier3":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS6.AdditionalShadingRatesSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS6.PerPrimitiveShadingRateSupportedWithViewportIndexing":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS6.BackgroundProcessingSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS8.UnalignedBlockTexturesSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS9.MeshShaderPipelineStatsSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS9.MeshShaderSupportsFullRangeRenderTargetArrayIndex":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS9.AtomicInt64OnTypedResourceSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS9.AtomicInt64OnGroupSharedSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS9.DerivativesInMeshAndAmplificationShadersSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS10.VariableRateShadingSumCombinerSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS10.MeshShaderPerPrimitiveShadingRateSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS11.AtomicInt64OnDescriptorHeapResourceSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS12.EnhancedBarriersSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS12.RelaxedFormatCastingSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS13.UnrestrictedBufferTextureCopyPitchSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS13.UnrestrictedVertexElementAlignmentSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS13.InvertedViewportHeightFlipsYSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS13.InvertedViewportDepthFlipsZSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS13.TextureCopyBetweenDimensionsSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS13.AlphaBlendFactorSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS14.AdvancedTextureOpsSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS14.WriteableMSAATexturesSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS14.IndependentFrontAndBackStencilRefMaskSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS15.TriangleFanSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS15.DynamicIndexBufferStripCutSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS16.DynamicDepthBiasSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS16.GPUUploadHeapSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS17.NonNormalizedCoordinateSamplersSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS17.ManualWriteTrackingResourceSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS18.RenderPassesValid":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS19.MismatchingOutputDimensionsSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS19.PointSamplingAddressesNeverRoundUp":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS19.RasterizerDesc2Supported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS19.NarrowQuadrilateralLinesSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS19.AnisoFilterWithPointMipSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS19.ComputeOnlyCustomHeapSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS20.ComputeOnlyWriteWatchSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS21.SampleCmpGradientAndBiasSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS21.ExtendedCommandInfoSupported":h,"D3D12_FEATURE_DATA_D3D12_OPTIONS22.TightAlignmentSupported":h},f={WARP:"2015",GCN1:"2012",GCN2:"2013",GCN3:"2015",GCN4:"2016",Vega:"2017",RDNA:"2019",RDNA2:"2020",RDNA3:"2022",RDNA4:"2025",Fermi:"2010",Kepler:"2012",Maxwell:"2014",Maxwell2:"2015",Pascal:"2016",Volta:"2017",Turing:"2018",Ampere:"2020",Ada:"2022",Blackwell:"2025","Gen7.5":"2013",Gen8:"2014",Gen9:"2015","Gen9.5":"2016",Gen11:"2019",Xe:"2020","Xe-HPG":"2022","Xe-HPC":"2023","Xe-LPG":"2023","Xe2-HPG":"2024","8cx 3":"2021",X1:"2024"};function g(e,t){let r=S.gy(e);if(null==t)return"❓";if(r in N)return N[r][t]??`❓(${t})`;if(r in U){let e="",n=0;for(let i=1;i<=t;i<<=1)t&i&&(n++,e+=(U[r][i]??`❓(${i})`)+"\n");return e=""==e?U[r][0]??"❓":e.substring(0,e.length-1),e}switch(r){case"SystemInfo.NvAPI_SYS_GetDriverAndBranchVersion.pDriverVersion":case"SystemInfo.NvAPI_SYS_GetDisplayDriverInfo - NV_DISPLAY_DRIVER_INFO.driverVersion":return(t/100).toFixed(2);case"DXGI_ADAPTER_DESC3.VendorId":case"AGSDeviceInfo.vendorId":case"VkPhysicalDeviceProperties.vendorID":case"Intel GPUDetect::GPUData.VendorId":{let e;return e=t<=65535?"0x"+((n=Number(t).toString(16)).length>=4?n:"0".repeat(4-n.length)+n):(e=>String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255))(t),O.vO[e]?`${O.vO[e]} (${e})`:`❓ (${e})`}case"DXGI_ADAPTER_DESC3.DeviceId":case"DXGI_ADAPTER_DESC3.Revision":case"NvPhysicalGpuHandle.NvAPI_GPU_GetPCIIdentifiers - pRevisionId":case"NvPhysicalGpuHandle.NvAPI_GPU_GetPCIIdentifiers - pExtDeviceId":case"AGSDeviceInfo.deviceId":case"AGSDeviceInfo.revisionId":case"Intel GPUDetect::GPUData.deviceID":case"VkPhysicalDeviceProperties.driverVersion":case"VkPhysicalDeviceProperties.deviceID":return"0x"+(e=>e.length>=4?e:"0".repeat(4-e.length)+e)(Number(t).toString(16));case"NvPhysicalGpuHandle.NvAPI_GPU_GetPCIIdentifiers - pDeviceID":case"NvPhysicalGpuHandle.NvAPI_GPU_GetVbiosRevision":case"Intel GPUDetect::GPUData.extensionVersion":return"0x"+(e=>e.length>=8?e:"0".repeat(8-e.length)+e)(Number(t).toString(16));case"CheckInterfaceSupport.UMDVersion":{let e=BigInt(t);return`${e>>48n&65535n}.${e>>32n&65535n}.${e>>16n&65535n}.${65535n&e}`}}var n;return Array.isArray(t)?t.join(", "):t}let C={Microsoft:new Set,AMD:new Set,Nvidia:new Set,Intel:new Set,Qualcomm:new Set},v=new Map,G=new Map,y=new Map,b=[];function M(e){let t,r=e.GetOriginalReport(),n=g("DXGI_ADAPTER_DESC3.VendorId",r.DXGI_ADAPTER_DESC3.VendorId);if("Microsoft Basic Render Driver"==r.DXGI_ADAPTER_DESC3.Description)t="WARP",C.Microsoft.add(t);else if(r.AGSDeviceInfo&&null!=r.AGSDeviceInfo.asicFamily){const e=["Unknown","PreGCN","GCN1","GCN2","GCN3","GCN4","Vega","RDNA","RDNA2","RDNA3","RDNA4"];0!=r.AGSDeviceInfo.asicFamily&&(t=e[r.AGSDeviceInfo.asicFamily],t||(t="Arch ID "+r.AGSDeviceInfo.asicFamily),C.AMD.add(t))}else n.startsWith("Intel")?(t={1024:"Gen7.5",2560:"Gen7.5",3328:"Gen7.5",3072:"Gen7.5",5632:"Gen8",2816:"Gen8",8704:"Gen8",6400:"Gen9",2304:"Gen9",22784:"Gen9.5",12544:"Gen9.5",15872:"Gen9.5",39680:"Gen9.5",23040:"Gen9.5",35328:"Gen11",39424:"Xe",17664:"Xe",19968:"Xe",19456:"Xe",17920:"Xe",18688:"Xe",42752:"Xe",22016:"Xe-HPG",2816:"Xe-HPC",32e3:"Xe-LPG",25600:"Xe2-HPG",57856:"Xe2-HPG"}[65280&r.DXGI_ADAPTER_DESC3.DeviceId],!t&&r["Intel GPUDetect::GPUData"]&&(t=r["Intel GPUDetect::GPUData"].GraphicsGeneration,"Unkown"==t&&"Unknown (37)"==r["Intel GPUDetect::GPUData"].GPUArchitecture&&"Intel(R) Iris(R) Xe Graphics"==r.DXGI_ADAPTER_DESC3.Description?t="Xe":"Xe High Performance Graphics"==t?t="Gen12.7 / Xe-HPG":"Xe High Performance Compute"==t?t="Xe-HPC":"Xe Low Power Graphics"==t?t="Gen12.7 / Xe-LPG":"Xe2 High Performance Graphics"==t&&(t="Gen13 / Xe2-HPG")),t&&C.Intel.add(t)):r.NvPhysicalGpuHandle&&r.NvPhysicalGpuHandle["NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::architecture_id"]?(i={Fermi:192,Fermi1:208,Kepler:224,Kepler1:240,Kepler2:256,Maxwell1:272,Maxwell2:288,Pascal:304,Volta:320,Volta1:336,Turing:352,Ampere:368,Ada:400,Blackwell:432},D=r.NvPhysicalGpuHandle["NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::architecture_id"],t=Object.keys(i).find((e=>i[e]===D)),t||(t="Arch ID "+r.NvPhysicalGpuHandle["NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::architecture_id"]),"Kepler2"==t||"Kepler1"==t?t="Kepler":"Fermi1"==t?t="Fermi":"Volta1"==t&&(t="Volta"),C.Nvidia.add(t||r.NvPhysicalGpuHandle["NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::architecture_id"].toString())):n.startsWith("Qualcomm")&&(/Snapdragon\(R\) X (Plus)|(Elite) - X1.*/.test(r.DXGI_ADAPTER_DESC3.Description)?t="X1":r.DXGI_ADAPTER_DESC3.Description.includes("8cx")&&(t=r.DXGI_ADAPTER_DESC3.Description.slice(r.DXGI_ADAPTER_DESC3.Description.search(/8cx.*/)),t=t.replace("Gen ","")),t&&C.Qualcomm.add(t));var i,D;t?(v.has(t)?v.get(t).push(r):v.set(t,[r]),G.has(t)?G.get(t).add(r.DXGI_ADAPTER_DESC3.Description):G.set(t,new Set([r.DXGI_ADAPTER_DESC3.Description]))):b.push(r)}function x(e){return!!e.GetField("Header.Using preview Agility SDK")||8==e.GetField("AGSDeviceInfo.asicFamily")&&1==e.GetField("AGSDeviceInfo.numWGPs")&&0==e.GetField("D3D12_FEATURE_DATA_D3D12_OPTIONS7.MeshShaderTier")}const w={alignOutsideHorizontal:!1,alignOutsideVertical:!1,preferTowardsBottom:!1,tooltipAlignment:"top"};function V(e,t,r){let n=Object.assign({},w);for(let[e,t]of Object.entries(n))r.hasOwnProperty(e)&&(n[e]=r[e]);e.classList.add("tooltip");const i=document.createElement("span");return i.className="tooltiptext white_space_pre tooltiptext"+n.tooltipAlignment,i.textContent=t,e.appendChild(i),i}function H(e){if(!P.A.VendorFilter[e])return!1;for(let t of C[e])if(P.A.ArchAgeFilter<=f[t])return!0;return!1}function k(e){let t=0;for(let r of C[e])P.A.ArchAgeFilter<=f[r]&&t++;return t}function L(e,t){let r=P.A.VendorFilter[e],n=f[t];return null==n&&(n="9999"),r&&P.A.ArchAgeFilter<=n}function X(){const e=document.getElementById("FeatureTable");R.E(e);let t=document.createElement("table");e.appendChild(t),R.E(t),function(e){let t=document.createElement("thead"),r=document.createElement("tr"),n=document.createElement("tr");r.appendChild(document.createElement("th")),n.appendChild(document.createElement("th"));let i=document.createElement("colgroup");e.appendChild(i);for(let[t,i]of Object.entries(C)){if(0==i.size)continue;if(!H(t))continue;let D=document.createElement("th");D.append(t),D.className=t,D.scope="colgroup",D.colSpan=k(t),r.appendChild(D);let o=document.createElement("colgroup");o.span=D.colSpan,e.appendChild(o);for(let e of i){if(!L(t,e))continue;let r=document.createElement("th");r.append(e),r.className=t,r.scope="col",n.appendChild(r);let i="",D=Array.from(G.get(e)).sort();for(let e of D)i+=e+"\n";V(r,i,{alignOutsideVertical:!0,preferTowardsBottom:!0,tooltipAlignment:"bottomright"})}}t.appendChild(r),t.appendChild(n),e.appendChild(t)}(t),function(e){let t=document.createElement("tbody");for(let[e,r]of Object.entries(F)){let n=document.createElement("tr");if(P.A.PropertiesSearchString&&!e.toLowerCase().includes(P.A.PropertiesSearchString.toLowerCase())&&!r.toLowerCase().includes(P.A.PropertiesSearchString.toLowerCase())&&"TableReleaseDate"!=e)continue;let i=document.createElement("td");i.classList.add("FeatureHeader"),i.append(r),i.scope="row",e.startsWith("Table")?"TableMarketShare"==e&&V(i,"Market share in the Steam Hardware Survey among DirectX 12 System. This is an underestimate.",{alignOutsideVertical:!0}):V(i,e,{alignOutsideVertical:!0}),n.appendChild(i);for(let[r,i]of Object.entries(C)){for(let t of i){if(!L(r,t))continue;let i=y.get(t);if("TableReleaseDate"==e){let e=document.createElement("td"),r=f[t];null==r&&(r="Unknown"),e.append(r),n.appendChild(e)}else if("TableNumReports"==e){let e=document.createElement("td");e.append(v.get(t).length),n.appendChild(e)}else if("TableMarketShare"==e){let e,r=document.createElement("td"),i=I[t];"WARP"==t?(i="N/A",e="WARP is a software rasterizer, not a hardware GPU, so it doesn't have a market share and not in Steam Hardware Survey."):i=null==i?"~0%":Math.round(1e4*i)/100+"%",r.append(i),n.appendChild(r),e&&V(r,e,{alignOutsideVertical:!0,tooltipAlignment:"bottomleft"})}else if("TableReportUsed"==e){let e=document.createElement("td"),t=document.createElement("a");t.href=`ID.html?ID=${i.ID}`,t.append(i.ID),e.appendChild(t),n.appendChild(e)}else if("TableD3d12InfoVersion"==e){let e=document.createElement("td"),t=i.Header.Version;e.append(t),n.appendChild(e)}else{let r=m.find((e=>e.GetField("ID")==i.ID)),D=r.GetField(e),o=!1,a="";if("D3D12_FEATURE_DATA_D3D12_OPTIONS21.WorkGraphsTier"==e&&null==D)D=r.GetField("D3D12_FEATURE_DATA_D3D12_OPTIONS_EXPERIMENTAL.WorkGraphsTier");else if("D3D12_FEATURE_DATA_D3D12_OPTIONS16.GPUUploadHeapSupported"==e){for(let e of v.get(t))if(e.D3D12_FEATURE_DATA_D3D12_OPTIONS16.GPUUploadHeapSupported){D=1;break}}else"D3D12_FEATURE_DATA_D3D12_OPTIONS5.SRVOnlyTiledResourceTier3"==e&&i.D3D12_FEATURE_DATA_D3D12_OPTIONS.TiledResourcesTier>=3?(D="N/A",o=!0):"D3D12_FEATURE_DATA_D3D12_OPTIONS5.RaytracingTier"==e&&"Pascal"==t?(D="Tier 1.0 *",o=!0,a="Pascal have (software emulated) Tier 1.0 raytracing support, but only if the card has 6GB of VRAM or more"):"D3D12_FEATURE_DATA_D3D12_OPTIONS5.RaytracingTier"==e&&"Turing"==t?(D="Tier 1.1 *",o=!0,a="Within Turing architecture there are:\nRTX 20 series and Quadro RTX cards with hardware Tier 1.1 support\nGTX 16 series cards with >= 6GB of VRAM with software emulated Tier 1.0 support\nGTX 16 series cards with < 6GB of VRAM with no raytracing support at all"):"D3D12_FEATURE_DATA_D3D12_OPTIONS7.MeshShaderTier"==e&&"RDNA2"==t&&(D=h[1]+"*",o=!0,a="RDNA2 iGPUs with 1 WGP don't have mesh shader support");let _=document.createElement("td");_.append(o?D:g(e,D)),n.appendChild(_),""!==a&&V(_,a,{alignOutsideVertical:!0,tooltipAlignment:"bottomcenter"})}}t.appendChild(n)}}e.appendChild(t)}(t)}window.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("FeatureTable"),t=document.createElement("div"),r=document.createTextNode("Loading. Please wait.");t.appendChild(r),e.appendChild(t),u.TK((e=>{m=e,function(){C.Microsoft.clear(),C.AMD.clear(),C.Nvidia.clear(),C.Intel.clear(),C.Qualcomm.clear(),v.clear(),G.clear(),y.clear(),b=[];for(let e of m)x(e)||M(e);for(let[r,n]of v){let i=null;for(let r of n)e=r,(null==(t=i)||(e.CheckInterfaceSupport.UMDVersion!=t.CheckInterfaceSupport.UMDVersion?e.CheckInterfaceSupport.UMDVersion>t.CheckInterfaceSupport.UMDVersion:e.Header.Version!=t.Header.Version?e.Header.Version>t.Header.Version:e.ID>t.ID))&&(i=r);y.set(r,i)}var e,t;function r(e,t){const r=[];for(const t of e)r.push(t);e.clear();for(const n of r.sort(t))e.add(n);return e}function n(e,t){let r=v.get(e)[0],n=Number(r.DXGI_ADAPTER_DESC3.DeviceId),i=v.get(t)[0];return n-Number(i.DXGI_ADAPTER_DESC3.DeviceId)}r(C.AMD,(function(e,t){let r=v.get(e)[0],n=Number(r.AGSDeviceInfo.asicFamily),i=v.get(t)[0];return n-Number(i.AGSDeviceInfo.asicFamily)})),r(C.Nvidia,(function(e,t){let r=v.get(e)[0],n=Number(r.NvPhysicalGpuHandle["NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::architecture_id"]),i=v.get(t)[0],D=Number(i.NvPhysicalGpuHandle["NvAPI_GPU_GetArchInfo - NV_GPU_ARCH_INFO::architecture_id"]);if(n==D){let e=r.DXGI_ADAPTER_DESC3.Description.includes("GTX 16");return i.DXGI_ADAPTER_DESC3.Description.includes("GTX 16")-e}return n-D})),r(C.Intel,(function(e,t){let r=1/0,i=1/0;return e.startsWith("Gen")&&(r=parseFloat(e.substring(3))),t.startsWith("Gen")&&(i=parseFloat(t.substring(3))),r==1/0&&i==1/0?n(e,t):r-i})),r(C.Qualcomm,n)}(),function(){const e=document.getElementById("FeatureTableFilter");R.E(e),function(e){let t=document.createElement("div");t.className="FilterPanel",e.appendChild(t);const r=document.createElement("input");r.type="search",r.placeholder="Search Properties",r.classList.add("searchBar"),P.A.PropertiesSearchString="",r.addEventListener("input",(function(e){P.A.PropertiesSearchString=e.target.value,X()})),e.appendChild(r);let n=document.createElement("div");n.classList.add("FieldSetContainer"),e.appendChild(n);let i=document.createElement("fieldset");i.classList.add("VendorFilter");let D=document.createElement("legend");D.textContent="Vendor Filter",i.appendChild(D);for(let e of Object.keys(C)){P.A.VendorFilter[e]=!0;const t=document.createElement("label"),r=document.createElement("input");r.type="checkbox",r.checked=!0,r.addEventListener("change",(t=>{P.A.VendorFilter[e]=t.target.checked,X()})),t.appendChild(r),t.appendChild(document.createTextNode(e)),i.appendChild(t),i.appendChild(document.createElement("br"))}n.appendChild(i);let o=document.createElement("fieldset"),a=document.createElement("legend");a.textContent="Architecture Age Filter",o.appendChild(a);let _=document.createElement("input");_.type="range",_.min=2010,_.max=(new Date).getFullYear(),_.value=2017,_.step=1;let A=document.createElement("label");A.htmlFor="archAgeSlider",A.textContent=`Released in ${_.value} or after`,P.A.ArchAgeFilter=_.value,_.addEventListener("input",(function(e){A.textContent=`Released in ${e.target.value} or after`,P.A.ArchAgeFilter=e.target.value,X()})),o.appendChild(_),o.appendChild(document.createElement("br")),o.appendChild(A),n.appendChild(o)}(e)}(),X()}))}),!1)}},e=>{e(e.s=37)}]);